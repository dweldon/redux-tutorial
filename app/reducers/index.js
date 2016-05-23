import todos from './todos';
import visibilityFilter from './visibilityFilter';

export default (state = [], action) => ({
  todos: todos(state.todos, action),
  visibilityFilter: visibilityFilter(state.visibilityFilter, action),
});
