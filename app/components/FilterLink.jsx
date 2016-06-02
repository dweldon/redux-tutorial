import React from 'react';
import { Link } from 'react-router';

/* eslint-disable react/prop-types */

const FilterLink = ({ filter, children }) => (
  <Link
    to={filter === 'all' ? '' : filter}
    activeStyle={{
      textDecoration: 'none',
      color: 'black',
    }}
  >
  {children}
  </Link>
);

export default FilterLink;
