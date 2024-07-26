import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';

import store from './store';
import Bugs from './bugs';
import Projects from './projects';
import axios from 'axios';

window['axios'] = axios;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <h1>Bug Tracker</h1>
      <hr />
      <div>
        <Bugs />
        {/* <Projects/> */}
      </div>
    </Provider>
  </React.StrictMode>
);


