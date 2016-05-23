import _ from 'underscore';
import expect from 'expect';
import deepFreeze from 'deep-freeze';

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const todo = _.omit(action, 'type');
      return [...state, { ...todo, completed: false }];
    }
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
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
