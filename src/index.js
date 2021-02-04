
import React from 'react';
import ReactDOM from 'react-dom';

import store from './redux/redux-store'

import App from './App';
import './index.css';


ReactDOM.render(
  <App store={store} dispatch={store.dispatch.bind(store)}/>
  ,document.getElementById('root')
);


