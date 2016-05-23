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

import rootReducer from './reducers/index';

const store2 = createStore(rootReducer, [],
  window.devToolsExtension && window.devToolsExtension()
);

store2.dispatch({
  type: 'ADD_TODO',
  id: 0,
  text: 'Learn Redux',
});

store2.dispatch({
  type: 'ADD_TODO',
  id: 1,
  text: 'Go Shopping',
});

store2.dispatch({
  type: 'TOGGLE_TODO',
  id: 0,
});

store2.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED',
});
