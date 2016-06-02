import { createStore } from 'redux';
import rootReducer from './reducers/index';

const persistedState = {
  todos: [{
    id: 100,
    text: 'Welcome back!',
    completed: false,
  }],
};

export default createStore(rootReducer, persistedState,
  window.devToolsExtension && window.devToolsExtension()
);
