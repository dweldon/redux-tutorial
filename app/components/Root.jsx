import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import TodoApp from './TodoApp';

/* eslint-disable react/prop-types */

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={TodoApp} />
    </Router>
  </Provider>
);

export default Root;
