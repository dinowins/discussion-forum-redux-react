import React, { useState } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'moment';


function PostList(props) {
  console.log("list", props.masterPostList)

  // const [time, setTime] = useState(props.timeOpen);

  Object.keys(props.masterPostList).forEach((post) => 
  
    props.masterPostList[post].formattedTime = (props.masterPostList[post].timeOpen).fromNow(true)
  );

  return(
    <div>
      {/* <button onClick={() => setTime(time.fromNow(true))}>Set Time</button> */}
      {/* <p>{time}</p> */}
      {Object.keys(props.masterPostList).map((postId, index) => {
        let post = props.masterPostList[postId];
        return <Post 
        title = {post.title}
        text = {post.text} 
        timeOpen = {post.formattedTime}
        id = {post.id}
        key = {index} />
        }
        )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    masterPostList: state
  }
}

PostList.propTypes = {
  masterPostList: PropTypes.object
};

export default connect(mapStateToProps)(PostList);
