import React from 'react';
import ReactDom from 'react-dom';

import TodoApp from './components/TodoApp';
import store from './store';

const render = () => {
  ReactDom.render(
    <TodoApp {...store.getState()} />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
