import React from 'react';

/* eslint-disable react/prop-types */

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{ textDecoration: completed ? 'line-through' : 'none' }}
  >
  {text}
  </li>
);

export default Todo;
