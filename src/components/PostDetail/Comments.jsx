import React from "react";
import "./Comments.css";

function Comments({ name, body }) {
  return (
    <div className="CommentContainer">
      <div className="CommentHeader">
        <h1>{name}</h1>
      </div>
      <div className="CommentBody">
        <p>{body}</p>
      </div>
    </div>
  );
}

export default Comments;
