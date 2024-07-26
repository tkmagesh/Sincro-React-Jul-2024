function asyncMiddleware({ dispatch, getState }) {
  return function (next) {
    return function (action) {
      if (typeof action === "function") {
        return action(dispatch, getState);
      }
      next(action);
    };
  };
}

export default asyncMiddleware;