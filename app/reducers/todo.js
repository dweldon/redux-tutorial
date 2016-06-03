import omit from 'lodash/omit';

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return { ...omit(action, 'type'), completed: false };
    }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return { ...state, completed: !state.completed };
    default:
      return state;
  }
};

export default todo;
