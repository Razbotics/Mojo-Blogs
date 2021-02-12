import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";

import Posts from "../components/Posts";
import SearchBar from "../components/SearchBar";
import { getUserPosts, getUserPostsByLimit } from "../services/postService";
import { getUserById } from "../services/userService";

const getPagination = (dataLength, size) => {
  return parseInt(dataLength / size) + (dataLength % size);
};

function PostsPage(props) {
  const postsPerCard = 4;
  const userId = props.match.params.id;
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [disabledNav, setDisabledNav] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState(0);
  const [postsLength, setPostsLength] = useState(0);

  const getPostsData = async (pagination) => {
    setLoading(true);
    const postsData = await getUserPostsByLimit(
      userId,
      pagination * postsPerCard,
      postsPerCard
    );
    const posts = postsData.data;
    setPosts(posts);
    setFilteredPosts(posts);
    if (pagination === 0) setDisabledNav("left");
    else if (pagination >= getPagination(postsLength, postsPerCard) - 2)
      setDisabledNav("right");
    else setDisabledNav("");
    setLoading(false);
  };

  const handlePagination = async (value) => {
    let val;
    if (value === "left") {
      val = pagination - 1;
      setPagination(val);
    } else if (value === "right") {
      val = pagination + 1;
      setPagination(val);
    }
    await getPostsData(val);
  };

  const handleSearch = async (value) => {
    setFilteredPosts(posts);
    if (!value) return;

    const filteredPosts = posts.filter((post) => {
      return post.title.includes(value);
    });
    setFilteredPosts(filteredPosts);
  };

  useEffect(async () => {
    const userPosts = await getUserPosts(userId);
    setPostsLength(userPosts.length);
    const user = await getUserById(userId);
    setUser(user.data);
    await getPostsData(0);
    setLoading(false);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <SearchBar placeholder="Search Posts" onSearch={handleSearch} />
      <Posts
        posts={filteredPosts}
        name={user.name}
        onPagination={handlePagination}
        disableNav={disabledNav}
      />
    </>
  );
}

export default PostsPage;
