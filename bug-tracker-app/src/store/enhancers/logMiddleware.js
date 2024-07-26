function logMiddleware(store) {
  return function (next) {
    //next => reference to the next middleware in the chain
    return function (action) {
      // invoked everytime an action is dispatched
      console.group(action.type);
      console.log("Before :", store.getState());
      console.log("Action :", action);
      next(action);
      console.log("After :", store.getState());
      console.groupEnd();
    };
  };
}

export default logMiddleware