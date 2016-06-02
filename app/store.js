import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import rootReducer from './reducers/index';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const store = createStore(rootReducer, persistedState,
  window.devToolsExtension && window.devToolsExtension()
);

store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos,
  });
}, 1000));

export default store;
