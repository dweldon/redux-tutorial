import React from 'react';
import { Provider } from 'react-redux';
import TodoApp from './TodoApp';

/* eslint-disable react/prop-types */

const Root = ({ store }) => (
  <Provider store={store}>
    <TodoApp />
  </Provider>
);

export default Root;
