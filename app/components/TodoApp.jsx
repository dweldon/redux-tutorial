import React from 'react';

import Footer from './Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';

/* eslint-disable react/prop-types, react/jsx-no-bind */

const TodoApp = ({ params }) => (
  <div>
    <AddTodo />
    <VisibleTodoList filter={params.filter || 'all'} />
    <Footer />
  </div>
);

export default TodoApp;
