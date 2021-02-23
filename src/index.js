import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './css/grid.css';
import './css/style.css';
import './css/responsive.css';
import './font-awesome-4.7.0/css/font-awesome.min.css';
import './javascript/main.js';
import {Provider} from 'react-redux';
import store  from './components/stores'

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
