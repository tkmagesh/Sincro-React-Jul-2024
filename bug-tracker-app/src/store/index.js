
import {legacy_createStore as createStore, combineReducers} from 'redux';
import bugsReducer from '../bugs/reducers/bugsReducer';
import projectsReducer from '../projects/reducers/projectsReducer';

// const store = createStore(bugsReducer); // state = [] of bugs
// const store = createStore(projectsReducer); // state = [] of projects

/* 
state = {
    bugs : [], //of bugs (from bugsReducer)
    projects : [] //of projects (from projectsReducer)
} 
*/
const appReducer = combineReducers({
    bugsState : bugsReducer,
    projectsState : projectsReducer
});

// creating a store with preloaded state
/* 
const localStorageData = {
  bugsState: [
    { id: 100, name: "bug-1", isClosed: false, createdAt: new Date() },
    { id: 101, name: "bug-2", isClosed: true, createdAt: new Date() },
  ],
  projectsState: [
    {id : 900, name : 'Dummy Project'}
  ],
};
const store = createStore(appReducer, localStorageData) 
*/
const store = createStore(appReducer);
export default store;