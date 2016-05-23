import React from 'react';

import store from '../store';

/* eslint-disable react/prop-types */

export default ({ filter, currentFilter, children }) => {
  if (filter === currentFilter) {
    return <span>{children}</span>;
  }
  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter,
        });
      }}
    >
    {children}
    </a>
  );
};
