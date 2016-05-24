import React from 'react';
import ReactDom from 'react-dom';

import store from './store';
import TodoApp from './components/TodoApp';
import Provider from './components/Provider';

ReactDom.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
