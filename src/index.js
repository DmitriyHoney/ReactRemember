import store from './redux/state'


// import reportWebVitals from './reportWebVitals';


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import reportWebVitals from './reportWebVitals';
console.log(store.getState());
let rerenderEntireTree = (store) => {
  ReactDOM.render(
    <React.StrictMode>
      {/* <App store={store.getState()} addPost={store.addPost.bind(store)} changeTextareaInput={store.changeTextareaInput.bind(store)}/> */}
      <App store={store.getState()} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

rerenderEntireTree(store)
store.subscribe(rerenderEntireTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
