import React from 'react';
import ReactDom from 'react-dom';

import TodoApp from './components/TodoApp';
import store from './store';

const render = () => {
  ReactDom.render(
    <TodoApp todos={store.getState().todos} />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
