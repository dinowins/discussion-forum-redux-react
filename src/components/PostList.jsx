import React from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class PostList extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    console.log("list", this.props.masterPostList)
    return(
      <div>
        {Object.keys(this.props.masterPostList).map((postId, index) => {
          let post = this.props.masterPostList[postId];
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
