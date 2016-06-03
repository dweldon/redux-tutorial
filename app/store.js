import { createStore } from 'redux';
import rootReducer from './reducers/index';

/* eslint-disable no-console*/

const logger = (store) => (next) => {
  if (!console.group) return next;

  return (action) => {
    console.group(action.type);
    console.log('%c prev state', 'color: gray', store.getState());
    console.log('%c action', 'color: blue', action);
    const returnValue = next(action);
    console.log('%c next state', 'color: green', store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
};

/* eslint-enable no-console*/

/* eslint-disable no-unused-vars */

const promise = (store) => (next) => (action) => {
  if (typeof action.then === 'function') {
    return action.then(next);
  }
  return next(action);
};

/* eslint-enable no-unused-vars */

/* eslint-disable no-param-reassign, no-return-assign */

const wrapDispatchWithMiddlewares = (store, middlewares) => {
  middlewares.slice().reverse().forEach(middleware =>
    store.dispatch = middleware(store)(store.dispatch)
  );
};

/* eslint-enable no-param-reassign, no-return-assign */

const configureStore = () => {
  const store = createStore(rootReducer, {},
    window.devToolsExtension && window.devToolsExtension()
  );

  const middlewares = [promise];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
  }

  wrapDispatchWithMiddlewares(store, middlewares);

  return store;
};

export default configureStore;
