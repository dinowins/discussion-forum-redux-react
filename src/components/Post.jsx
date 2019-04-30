import React from 'React';
import Vote from './Vote';
import PropTypes from 'prop-types';

function Post(props) {
  console.log("post", props)
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
}	

Post.propTypes = {
  title: PropTypes.string
}

export default Post;