import React from 'react';

import store from '../store';
import Footer from './Footer';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

let nextTodoId = 0;

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL': return todos;
    case 'SHOW_COMPLETED': return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE': return todos.filter(t => !t.completed);
    default: return todos;
  }
};

const setVisibilityFilter = (filter) => {
  store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter,
  });
};

const addTodo = (text) => {
  store.dispatch({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
  });
};

const toggleTodo = (id) => {
  store.dispatch({
    type: 'TOGGLE_TODO',
    id,
  });
};

/* eslint-disable react/prop-types, react/jsx-no-bind */

const TodoApp = ({ todos, visibilityFilter }) => (
  <div>
    <AddTodo
      onAddClick={addTodo}
    />
    <TodoList
      todos={getVisibleTodos(todos, visibilityFilter)}
      onTodoClick={toggleTodo}
    />
    <Footer
      visibilityFilter={visibilityFilter}
      onFilterClick={setVisibilityFilter}
    />
  </div>
);

export default TodoApp;
