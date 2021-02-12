import React from "react";

function PostsPage(props) {
  const userId = props.match.params.id;
  return <h1>Post of User {userId}</h1>;
}

export default PostsPage;
