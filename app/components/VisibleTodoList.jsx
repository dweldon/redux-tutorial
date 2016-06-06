import React from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import FetchError from './FetchError';
import * as actions from '../actions';
import { getVisibleTodos, getIsFetching, getErrorMessage } from '../reducers';

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
    const { toggleTodo, errorMessage, todos, isFetching } = this.props;
    if (isFetching && !todos.length) {
      return <p>Loading...</p>;
    }
    if (errorMessage && !todos.length) {
      return (
        <FetchError
          message={errorMessage}
          onRetry={() => this.fetchData()}
        />
      );
    }

    return <TodoList todos={todos} onTodoClick={toggleTodo} />;
  }
}

const mapStateToProps = (state, { filter }) => ({
  todos: getVisibleTodos(state, filter),
  errorMessage: getErrorMessage(state, filter),
  isFetching: getIsFetching(state, filter),
  filter,
});

const VisibleTodoListWrapper = connect(
  mapStateToProps,
  actions
)(VisibleTodoList);

export default VisibleTodoListWrapper;
