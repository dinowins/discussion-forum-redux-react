import React from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function PostList(props) {
  console.log("list", props.masterPostList)

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
