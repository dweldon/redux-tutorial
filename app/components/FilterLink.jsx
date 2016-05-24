import React from 'react';

import Link from './Link';

const setVisibilityFilter = (store, filter) => {
  store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter,
  });
};

/* eslint-disable react/prop-types */

class FilterLink extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.props;
    const { props } = this;
    const state = store.getState();

    return (
      <Link
        active={props.filter === state.visibilityFilter}
        onClick={() => setVisibilityFilter(store, props.filter)}
      >
      {props.children}
      </Link>
    );
  }
}

export default FilterLink;
