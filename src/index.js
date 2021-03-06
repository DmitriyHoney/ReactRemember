
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import store from './redux/redux-store'

import App from './App';
import './index.css';

setInterval(() => {
  store.dispatch({type: "FAKE"})
}, 1000);


ReactDOM.render(
  <BrowserRouter>
    <App store={store} />
  </BrowserRouter>
  ,document.getElementById('root')
);


