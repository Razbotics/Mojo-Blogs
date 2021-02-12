import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import PostDetail from "../components/PostDetail";
import SearchBar from "../components/SearchBar";
import { toast } from "react-toastify";
import { getPost, getPostComments, deletePost } from "../services/postService";

function PostDetailsPage(props) {
  const postId = props.match.params.id;
  const [loading, setLoading] = useState("true");
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  const handleSearch = (value) => {};
  const handleClose = async () => {
    setLoading(true);
    await deletePost(postId);
    props.history.goBack();
    setLoading(false);
  };

  useEffect(async () => {
    try {
      const post = await getPost(postId);
      const comments = await getPostComments(postId);
      setPost(post);
      setComments(comments);
      setLoading(false);
    } catch (e) {
      toast.error("Error in fetching Posts");
      setPost(null);
      setComments([]);
      setLoading(false);
    }
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <SearchBar placeholder="Search" onSearch={handleSearch} />
      <PostDetail post={post} comments={comments} onClose={handleClose} />
    </>
  );
}

export default PostDetailsPage;
