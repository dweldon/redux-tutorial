import React from 'react';

import store from '../store';
import TodoList from './TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL': return todos;
    case 'SHOW_COMPLETED': return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE': return todos.filter(t => !t.completed);
    default: return todos;
  }
};

const toggleTodo = (id) => {
  store.dispatch({
    type: 'TOGGLE_TODO',
    id,
  });
};

/* eslint-disable react/prop-types */

class VisibleTodoList extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const state = store.getState();

    return (
      <TodoList
        todos={getVisibleTodos(state.todos, state.visibilityFilter)}
        onTodoClick={id => toggleTodo(id)}
      />
    );
  }
}

export default VisibleTodoList;
