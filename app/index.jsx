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

const addCounter = (list, value) => [...list, value];

const testAddCounter = () => {
  const l1 = [];
  const l2 = [0];

  deepFreeze(l1);

  expect(addCounter(l1, 0)).toEqual(l2);
};

testAddCounter();

//------------------------------------------------------------------------------

const removeCounter = (list, index) => [
  ...list.slice(0, index),
  ...list.slice(index + 1),
];

const testRemoveCounter = () => {
  const l1 = [0, 10, 20];
  const l2 = [0, 20];

  deepFreeze(l1);

  expect(removeCounter(l1, 1)).toEqual(l2);
};

testRemoveCounter();

//------------------------------------------------------------------------------

const incrementCounter = (list, index) => [
  ...list.slice(0, index),
  list[index] + 1,
  ...list.slice(index + 1),
];

const testIncrementCounter = () => {
  const l1 = [0, 10, 20];
  const l2 = [0, 11, 20];

  deepFreeze(l1);

  expect(incrementCounter(l1, 1)).toEqual(l2);
};

testIncrementCounter();
