import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { bindActionCreators } from 'redux'
import store from './store';

import * as bugActionCreators from "./bugs/actions";
import Bugs from './bugs';

import * as projectActionCreators from './projects/actions';
import Projects from './projects'

const root = ReactDOM.createRoot(document.getElementById("root"));

const bugActionDispatchers = bindActionCreators(
  bugActionCreators,
  store.dispatch
);

const projectActionDispatchers = bindActionCreators(
  projectActionCreators,
  store.dispatch
)

function renderApp() {
  // const bugs = store.getState();
  // const projects = store.getState();
  /* 
  const storeState = store.getState(),
    bugs = storeState.bugsState,
    projects = storeState.projectsState; 
  */
  const {bugsState : bugs, projectsState : projects} = store.getState();
  root.render(
    <React.StrictMode>
      <h1>Bug Tracker</h1>
      <hr/>
      <div>
        <Bugs bugs={bugs} {...bugActionDispatchers} />
        <Projects projects={projects} {...projectActionDispatchers}/>
      </div>
    </React.StrictMode>
  );
}
renderApp();
store.subscribe(renderApp);


