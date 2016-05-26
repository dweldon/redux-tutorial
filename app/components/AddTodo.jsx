import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

/* eslint-disable react/prop-types */

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input ref={node => { input = node; }} />
      <button
        onClick={() => {
          dispatch(addTodo(input.value));
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
