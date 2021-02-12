import React from "react";
import PostCard from "./PostCard";
import Navigator from "../common/navigator";
import "./Posts.css";

function Posts({ posts, name, onPagination, disableNav }) {
  return (
    <div className="PostsContainer">
      <Navigator type="left" onPress={onPagination} disabled={disableNav} />
      <div className="Posts">
        <div className="PostHeader">
          <h1 className="Header">{name}</h1>
        </div>
        {posts.map((post) => (
          <PostCard key={post.id} content={post.title} />
        ))}
      </div>
      <Navigator type="right" onPress={onPagination} disabled={disableNav} />
    </div>
  );
}

export default Posts;
