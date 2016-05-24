import React from 'react';

let nextTodoId = 0;

const addTodo = (store, text) => {
  store.dispatch({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
  });
};

/* eslint-disable react/prop-types */

const AddTodo = (props, { store }) => {
  let input;

  return (
    <div>
      <input ref={node => { input = node; }} />
      <button
        onClick={() => {
          addTodo(store, input.value);
          input.value = '';
        }}
      >
      Add Todo
      </button>
    </div>
  );
};

AddTodo.contextTypes = { store: React.PropTypes.object };

export default AddTodo;
