import React from 'React';
import Vote from './Vote';
import PropTypes from 'prop-types';

function Post(props) {
  console.log("post", props)
  return (
    <div>
      <h2>A Post {props.title}</h2>
      <Vote/>
    </div>
  );
}	

Post.propTypes = {
  title: PropTypes.string
}

export default Post;