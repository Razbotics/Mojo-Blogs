import React from "react";

function PostCard({ content, onPostClick }) {
  return (
    <div className="PostCard" onClick={onPostClick}>
      <p className="content">{content}</p>
    </div>
  );
}

export default PostCard;
