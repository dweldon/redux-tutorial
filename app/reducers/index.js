import _ from 'underscore';

import todos from './todos';
import visibilityFilter from './visibilityFilter';

const combineReducers = (reducers) =>
  (state = {}, action) =>
    _.keys(reducers).reduce((
      (nextState, key) =>
        ({ ...nextState, [key]: reducers[key](state[key], action) })
    ), {});

export default combineReducers({ todos, visibilityFilter });
