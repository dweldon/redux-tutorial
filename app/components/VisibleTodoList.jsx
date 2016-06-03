import { connect } from 'react-redux';

import TodoList from './TodoList';
import { toggleTodo } from '../actions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'all': return todos;
    case 'completed': return todos.filter(t => t.completed);
    case 'active': return todos.filter(t => !t.completed);
    default: return todos;
  }
};

const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(state.todos, ownProps.filter),
});

const VisibleTodoList = connect(
  mapStateToProps,
  { onTodoClick: toggleTodo }
)(TodoList);

export default VisibleTodoList;
