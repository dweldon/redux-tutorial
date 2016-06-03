import React from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import * as actions from '../actions';
import { getVisibleTodos } from '../reducers';

/* eslint-disable react/prop-types */

class VisibleTodoList extends React.Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, fetchTodos } = this.props;
    fetchTodos(filter);
  }

  render() {
    const { toggleTodo, ...rest } = this.props;
    return <TodoList {...rest} onTodoClick={toggleTodo} />;
  }
}

const mapStateToProps = (state, ownProps) => ({
  filter: ownProps.filter,
  todos: getVisibleTodos(state),
});

const VisibleTodoListWrapper = connect(
  mapStateToProps,
  actions
)(VisibleTodoList);

export default VisibleTodoListWrapper;
