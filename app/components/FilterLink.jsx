import React from 'react';

import store from '../store';
import Link from './Link';

const setVisibilityFilter = (filter) => {
  store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter,
  });
};

/* eslint-disable react/prop-types */

class FilterLink extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { props } = this;
    const state = store.getState();

    return (
      <Link
        active={props.filter === state.visibilityFilter}
        onClick={() => setVisibilityFilter(props.filter)}
      >
      {props.children}
      </Link>
    );
  }
}

export default FilterLink;
