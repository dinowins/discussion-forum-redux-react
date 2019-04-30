

export default (state = {}, action) => {
  switch (action.type) {
  case 'ADD_POST':
    const {title, text, timeOpen, id} = action;
    let newState = Object.assign({}, state, {
      [id]: {
        title: title,
        text: text,
        timeOpen: timeOpen,
        id: id,
      }
    });
    return newState;
  default: 
    return state;
  }
};