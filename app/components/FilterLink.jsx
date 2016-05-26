import { connect } from 'react-redux';

import Link from './Link';
import { setVisibilityFilter } from '../actions';

const mapStateToProps = (state, props) => ({
  active: props.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch, props) => ({
  onClick() {
    dispatch(setVisibilityFilter(props.filter));
  },
});

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;
