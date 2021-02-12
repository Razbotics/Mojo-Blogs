import React from "react";

function PostCard({ content }) {
  return (
    <div className="PostCard">
      <p className="content">{content}</p>
    </div>
  );
}

export default PostCard;
