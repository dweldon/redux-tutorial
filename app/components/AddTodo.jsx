import React from 'react';
import { connect } from 'react-redux';

let nextTodoId = 0;

const addTodo = (dispatch, text) => {
  dispatch({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
  });
};

/* eslint-disable react/prop-types */

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input ref={node => { input = node; }} />
      <button
        onClick={() => {
          addTodo(dispatch, input.value);
          input.value = '';
        }}
      >
      Add Todo
      </button>
    </div>
  );
};

// If no arguments are provided, only the dispatch is mapped as a prop.
export default connect()(AddTodo);
