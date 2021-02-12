import React from "react";
import PostCard from "./PostCard";
import Navigator from "../common/navigator";
import { useHistory } from "react-router-dom";
import "./Posts.css";

function Posts({ posts, name, onPagination, disableNav }) {
  const history = useHistory();
  const handleOnPostClicked = (id) => {
    history.push(`/post_details/${id}`);
  };
  return (
    <div className="PostsContainer">
      <div className="Posts">
        <div className="PostHeader">
          <h1 className="Header">{name}</h1>
        </div>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            content={post.title}
            onPostClick={() => handleOnPostClicked(post.id)}
          />
        ))}
      </div>
      <div className="NavContainer">
        <Navigator type="left" onPress={onPagination} disabled={disableNav} />
        <Navigator type="right" onPress={onPagination} disabled={disableNav} />
      </div>
    </div>
  );
}

export default Posts;
