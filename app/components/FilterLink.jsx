import { connect } from 'react-redux';

import Link from './Link';

const mapStateToProps = (state, props) => ({
  active: props.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch, props) => ({
  onClick() {
    dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter: props.filter,
    });
  },
});

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;
