
import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import bugsReducer from '../bugs/reducers/bugsReducer';
import projectsReducer from '../projects/reducers/projectsReducer';

function logMiddleware(store){
  return function(next){ //next => reference to the next middleware in the chain
    return function(action){ // invoked everytime an action is dispatched
      console.group(action.type)
      console.log('Before :', store.getState())
      console.log('Action :', action)
      next(action);
      console.log("After :", store.getState());
      console.groupEnd()
    }
  }
}

/* 
function profileMiddleware(store) {
  return function (next) {
    //next => reference to the next middleware in the chain
    return function (action) {
      // invoked everytime an action is dispatched
      let start = new Date()
      next(action);
      let end = new Date()
      console.log('elapsed :', end - start)
    };
  };
} 
*/

function asyncMiddleware(store){
  return function(next){
    return function(action){
      if (typeof action === 'function'){
        return action(store.dispatch)
      }
      next(action)
    }
  }
}

const promiseMiddeware = store => next => action => {
  if (action instanceof Promise){
    action.then(actionObj => store.dispatch(actionObj))
    return
  }
  next(action);
}

const appReducer = combineReducers({
    bugsState : bugsReducer,
    projectsState : projectsReducer
});

const store = createStore(
  appReducer,
  applyMiddleware(logMiddleware, asyncMiddleware, promiseMiddeware)
);

export default store;