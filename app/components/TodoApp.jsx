import React from 'react';
import store from '../store';

let nextTodoId = 0;

/* eslint-disable react/prop-types */

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

  render() {
    return (
      <div>
        <input ref={node => { this.input = node; }} />
        <button onClick={this.addTodo}>Add Todo</button>
        <ul>
          {this.props.todos.map(todo =>
            <li key={todo.id}>{todo.text}</li>
          )}
        </ul>
      </div>
    );
  }
}
