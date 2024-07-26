import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Spinner from './Spinner';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import spinnerSlice from './spinnerSlice';
const actions = spinnerSlice.actions;
console.log(actions);

const reducer = spinnerSlice.reducer;
console.log(reducer);

const store = configureStore({
  reducer : {
    spinnerState : spinnerSlice.reducer
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Spinner value={100} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
