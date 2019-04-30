import React, { useState, useEffect } from 'react';
import Vote from './Vote';
import PropTypes from 'prop-types';
import Moment from 'moment';


function Post(props) {
  let formattedTime;
  formattedTime = (props.timeOpen).fromNow(true);

  setInterval(() => {
    formattedTime = (props.timeOpen).fromNow(true);
  }, 1000)

  useEffect(() => {
    formattedTime = formattedTime;
  })

  return (
    <div>
      <p>{formattedTime}</p>
      <h2>A Post {props.title}</h2>
      <p>{props.text}</p>
      <Vote/>
    </div>
  );
  
  
}	

Post.propTypes = {
  title: PropTypes.string
}

export default Post;