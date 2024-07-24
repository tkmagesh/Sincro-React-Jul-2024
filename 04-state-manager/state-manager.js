let StateManager = (() => {
  /* 
        store
            - getState() => currentState
            - subscribe(fn) => call the callbackFn whenever the state is changing
            - dispatch(action) => call the reducer with the currentState & action
    */

  let _currentState = undefined,
    _subscribers = [],
    _reducer = null;

  function getState() {
    return _currentState;
  }

  function subscribe(callbackFn) {
    _subscribers.push(callbackFn);
  }

  // private utility function
  function triggerChange() {
    _subscribers.forEach((callbackFn) => callbackFn());
  }

  function dispatch(action) {
    let newState = _reducer(_currentState, action);
    if (newState === _currentState) return; // no state change
    _currentState = newState;
    triggerChange();
  }
  
  //factory
  function createStore(reducerFn){
    if (typeof reducerFn !== 'function' || reducerFn.length !== 2){
        throw new Error('a reducerFn(currentState,action) is mandatory to create a store!')
    }
    _reducer = reducerFn;
    let store = {
        getState,
        subscribe,
        dispatch,
    };

    return store;
    }

    return {
        createStore
    }
})();