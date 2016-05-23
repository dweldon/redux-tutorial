import React from 'react';

/* eslint-disable react/prop-types */

export default ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{ textDecoration: completed ? 'line-through' : 'none' }}
  >
  {text}
  </li>
);
