import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { bindActionCreators } from 'redux'
import * as bugActionCreators from './bugs/actions'
import store from './store';
import Bugs from './bugs';

const root = ReactDOM.createRoot(document.getElementById("root"));

const bugActionDispatchers = bindActionCreators(
  bugActionCreators,
  store.dispatch
);
function renderApp() {
  const bugs = store.getState();
  root.render(
    <React.StrictMode>
      <h1>Bug Tracker</h1>
      <hr/>
      <div>
        <Bugs bugs={bugs} {...bugActionDispatchers} />
      </div>
    </React.StrictMode>
  );
}
renderApp();
store.subscribe(renderApp);


