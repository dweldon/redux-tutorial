import _ from 'underscore';
import expect from 'expect';
import deepFreeze from 'deep-freeze';

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const todo = _.omit(action, 'type');
      return [...state, { ...todo, completed: false }];
    }
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

testAddTodo();

export default todos;
