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

const promiseMiddeware = (store) => (next) => (action) => {
  if (action instanceof Promise) {
    action.then((actionObj) => store.dispatch(actionObj));
    return;
  }
  next(action);
};

export default promiseMiddeware;