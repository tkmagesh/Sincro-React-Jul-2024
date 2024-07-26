import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';

import store from './store';
import Bugs from './bugs';

/* 
import * as projectActionCreators from './projects/actions';
import Projects from './projects' 
*/



/* 
const projectActionDispatchers = bindActionCreators(
  projectActionCreators,
  store.dispatch
) 
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <h1>Bug Tracker</h1>
      <hr />
      <div>
        <Bugs />
        {/* <Projects projects={projects} {...projectActionDispatchers}/> */}
      </div>
    </Provider>
  </React.StrictMode>
);


