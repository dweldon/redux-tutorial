import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store';
import Root from './components/Root';

const store = configureStore();

ReactDom.render(
  <Root store={store} />,
  document.getElementById('root')
);
