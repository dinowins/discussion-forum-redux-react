import NewPostFormReducer from "../src/reducers/NewPostForm-reducer";

describe('NewPostFormReducer', () => {
  let action;
  const testPost = {
    title: 'A Whole New Post',
    text: 'The text of a whole new post',
    timeOpen: 30000000,
    id: 0
  }

  test('return default state if no action is recognized', () => {
    expect(NewPostFormReducer({}, { type: null })).toEqual({});
  });

  test('Add new Post successfully adds posts to the main list', () => {
    const { title, text, timeOpen, id} = testPost;
    action = {
      type: 'ADD_POST',
      title: title,
      text: text,
      timeOpen: timeOpen,
      id: id
    };
    expect(NewPostFormReducer({},  action )).toEqual({
      [id]: {
        title: title,
        text: text,
        timeOpen: timeOpen,
        id: id
      }
    })
  })
});