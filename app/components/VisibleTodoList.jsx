import React from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import * as actions from '../actions';
import { getVisibleTodos, getIsFetching } from '../reducers';

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
    const { filter, requestTodos, fetchTodos } = this.props;
    requestTodos(filter);
    fetchTodos(filter);
  }

  render() {
    const { toggleTodo, todos, isFetching } = this.props;
    if (isFetching && !todos.length) {
      return <p>Loading...</p>;
    }

    return <TodoList todos={todos} onTodoClick={toggleTodo} />;
  }
}

const mapStateToProps = (state, { filter }) => ({
  todos: getVisibleTodos(state, filter),
  isFetching: getIsFetching(state, filter),
  filter,
});

const VisibleTodoListWrapper = connect(
  mapStateToProps,
  actions
)(VisibleTodoList);

export default VisibleTodoListWrapper;
