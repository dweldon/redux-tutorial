import omit from 'lodash/omit';
import expect from 'expect';
import deepFreeze from 'deep-freeze';

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

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, todo(undefined, action)];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

const testAddTodo = () => {
  const s1 = [];
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux',
  };
  const s2 = [{
    id: 0,
    text: 'Learn Redux',
    completed: false,
  }];

  deepFreeze(s1);
  deepFreeze(action);

  expect(todos(s1, action)).toEqual(s2);
};

const testToggleTodo = () => {
  const s1 = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false,
    },
    {
      id: 1,
      text: 'Go Shopping',
      completed: false,
    },
  ];
  const action = {
    type: 'TOGGLE_TODO',
    id: 1,
  };
  const s2 = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false,
    },
    {
      id: 1,
      text: 'Go Shopping',
      completed: true,
    },
  ];

  deepFreeze(s1);
  deepFreeze(action);

  expect(todos(s1, action)).toEqual(s2);
};

testAddTodo();
testToggleTodo();

export default todos;
