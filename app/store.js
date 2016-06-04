import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import rootReducer from './reducers/index';

const configureStore = () => {
  const middleware = [promise];
  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
  }

  return createStore(rootReducer, compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
};

export default configureStore;
