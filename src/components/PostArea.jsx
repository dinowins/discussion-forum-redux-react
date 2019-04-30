import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';

function PostArea () {
  console.log("area")
  return (
    <div>
      <NewPostForm/>
      <PostList/>
    </div>
  );
}

export default PostArea;

