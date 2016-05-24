import React from 'react';

import store from '../store';
import Footer from './Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';

/* eslint-disable react/prop-types, react/jsx-no-bind */

const TodoApp = () => (
  <div>
    <AddTodo store={store} />
    <VisibleTodoList store={store} />
    <Footer store={store} />
  </div>
);

export default TodoApp;
