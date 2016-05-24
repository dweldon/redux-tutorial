import React from 'react';

/* eslint-disable react/prop-types */

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>;
  }
  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
    {children}
    </a>
  );
};

export default Link;
