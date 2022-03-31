import React,{Suspense}from 'react';
import './i18n';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';

import './i18n';



ReactDOM.render(
  <Provider store={store} >
    <React.StrictMode>
      <Suspense fallback="loading">
        <App />
      </Suspense>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
