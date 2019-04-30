import React, { useState } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'moment';


function PostList(props) {
  console.log("list", props.masterPostList)
  
  // let formatTime = Object.keys(props.masterPostList).forEach((post) => 
  //   props.masterPostList[post].formattedTime = (props.masterPostList[post].timeOpen).fromNow(true)
  // );

  return(
    <div>
      {Object.keys(props.masterPostList).map((postId, index) => {
        let post = props.masterPostList[postId];
        return <Post 
        title = {post.title}
        text = {post.text} 
        timeOpen = {post.timeOpen}
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
