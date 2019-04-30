import React, { useState } from 'react';
import Vote from './Vote';
import PropTypes from 'prop-types';
import Moment from 'moment';


function Post(props) {
  const [time, setTime] = useState(props.timeOpen);
  console.log(time)
  console.log("post", props)
  
  return (
    <div>
      <button onClick={() => setTime(Date.now() - props.timeOpen)}>Set Time</button>
      <p>{time}</p>
      <h2>A Post {props.title}</h2>
      <p>{props.time}</p>
      <Vote/>
    </div>
  );
}	

Post.propTypes = {
  title: PropTypes.string
}

export default Post;