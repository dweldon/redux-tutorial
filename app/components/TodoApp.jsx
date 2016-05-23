import React from 'react';

import store from '../store';
import FilterLink from './FilterLink';

let nextTodoId = 0;

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL': return todos;
    case 'SHOW_COMPLETED': return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE': return todos.filter(t => !t.completed);
    default: return todos;
  }
};

/* eslint-disable react/prop-types, react/jsx-no-bind */

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo() {
    store.dispatch({
      type: 'ADD_TODO',
      id: nextTodoId++,
      text: this.input.value,
    });
    this.input.value = '';
  }

  toggleTodo(id) {
    store.dispatch({
      type: 'TOGGLE_TODO',
      id,
    });
  }

  render() {
    const { todos, visibilityFilter } = this.props;
    const visibleTodos = getVisibleTodos(todos, visibilityFilter);

    return (
      <div>
        <input ref={node => { this.input = node; }} />
        <button onClick={this.addTodo}>Add Todo</button>
        <ul>
          {visibleTodos.map(todo =>
            <li
              key={todo.id}
              onClick={this.toggleTodo.bind(this, todo.id)}
              style={{ textDecoration: todo.completed ?
                'line-through' : 'none',
              }}
            >
            {todo.text}
            </li>
          )}
        </ul>
        <p>
          Show:
          {" "}
          <FilterLink
            filter="SHOW_ALL"
            currentFilter={visibilityFilter}
          >
          All
          </FilterLink>
          {" "}
          <FilterLink
            filter="SHOW_ACTIVE"
            currentFilter={visibilityFilter}
          >
          Active
          </FilterLink>
          {" "}
          <FilterLink
            filter="SHOW_COMPLETED"
            currentFilter={visibilityFilter}
          >
          Completed
          </FilterLink>
        </p>
      </div>
    );
  }
}
