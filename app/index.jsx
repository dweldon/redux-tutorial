import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import TodoApp from './components/TodoApp';

ReactDom.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
