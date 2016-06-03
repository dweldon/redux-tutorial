import { connect } from 'react-redux';

import TodoList from './TodoList';
import { toggleTodo } from '../actions';
import { getVisibleTodos } from '../reducers';

const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(state, ownProps.filter),
});

const VisibleTodoList = connect(
  mapStateToProps,
  { onTodoClick: toggleTodo }
)(TodoList);

export default VisibleTodoList;
