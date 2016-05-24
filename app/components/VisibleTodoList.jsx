import React from 'react';

import TodoList from './TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL': return todos;
    case 'SHOW_COMPLETED': return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE': return todos.filter(t => !t.completed);
    default: return todos;
  }
};

const toggleTodo = (store, id) => {
  store.dispatch({
    type: 'TOGGLE_TODO',
    id,
  });
};

/* eslint-disable react/prop-types */

class VisibleTodoList extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.props;
    const state = store.getState();

    return (
      <TodoList
        todos={getVisibleTodos(state.todos, state.visibilityFilter)}
        onTodoClick={id => toggleTodo(store, id)}
      />
    );
  }
}

export default VisibleTodoList;
