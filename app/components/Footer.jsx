import React from 'react';
import FilterLink from './FilterLink';

/* eslint-disable react/prop-types */

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="all">All</FilterLink>
    {" "}
    <FilterLink filter="active">Active</FilterLink>
    {" "}
    <FilterLink filter="completed">Completed</FilterLink>
  </p>
);

export default Footer;
