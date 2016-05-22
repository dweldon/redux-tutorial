import React from 'react';
import { createStore } from 'redux';
import ReactDom from 'react-dom';

import Counter from './components/Counter';

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    default: return state;
  }
};

const store = createStore(counter);

const increment = () => store.dispatch({ type: 'INCREMENT' });
const decrement = () => store.dispatch({ type: 'DECREMENT' });

const render = () => {
  ReactDom.render(
    <Counter
      value={store.getState()}
      onIncrement={increment}
      onDecrement={decrement}
    />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();

//------------------------------------------------------------------------------

import expect from 'expect';
import deepFreeze from 'deep-freeze';

const toggleTodo = (todo) => ({ ...todo, completed: !todo.completed });

const testToggleTodo = () => {
  const t1 = {
    id: 0,
    text: 'Learn Redux',
    completed: false,
  };
  const t2 = {
    id: 0,
    text: 'Learn Redux',
    completed: true,
  };

  deepFreeze(t1);

  expect(toggleTodo(t1)).toEqual(t2);
};

testToggleTodo();
