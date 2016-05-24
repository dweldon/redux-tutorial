import React from 'react';

import store from '../store';

let nextTodoId = 0;

const addTodo = (text) => {
  store.dispatch({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
  });
};

/* eslint-disable react/prop-types */

const AddTodo = () => {
  let input;

  return (
    <div>
      <input ref={node => { input = node; }} />
      <button
        onClick={() => {
          addTodo(input.value);
          input.value = '';
        }}
      >
      Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
