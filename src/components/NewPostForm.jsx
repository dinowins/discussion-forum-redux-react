import React from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import { v4 } from 'uuid'; 

function NewPostForm(props) {
  let _title = null;
  let _text = null;

  function handleNewPostSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'ADD_POST',
      id: v4(),
      title: _title.value,
      text: _text.value,
      timeOpen: new Moment()
    };
    dispatch(action);
    _title.value = '';
    _text.value = '';
  }

  return (
    <form onSubmit={handleNewPostSubmission}>
      <input type="text" 
        placeholder="title"
        id="title"
        ref={(input) => {_title = input;}} />
      <input type="text" 
        placeholder="details"
        id="text"
        ref={(input) => {_text = input;}} />
      <button type='submit'>Submit New Post</button>
    </form>
  );
}

export default connect()(NewPostForm);