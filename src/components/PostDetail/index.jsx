import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";
import Comments from "./Comments";
import "./PostDetail.css";

function PostDetail({ post, comments, onClose }) {
  const [toggle, setToggle] = useState(false);
  if (!post) return null;
  return (
    <div className="PostDetails">
      <div className="PostDetailsHeader">
        <h1>{post.title}</h1>
        <div className="Close" onClick={onClose}>
          <FaTimes size={30} />
        </div>
      </div>
      <div className="PostDetailsBody">
        <p>{post.body}</p>
      </div>
      {toggle ? (
        <>
          <h1>Comments</h1>
          <div className="Comments">
            {comments.map((comment) => (
              <Comments name={comment.name} body={comment.body} />
            ))}
          </div>
        </>
      ) : null}
      <div className="CommentToggle" onClick={() => setToggle(!toggle)}>
        {toggle ? <FaChevronUp size={30} /> : <FaChevronDown size={30} />}
      </div>
    </div>
  );
}

export default PostDetail;
