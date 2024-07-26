
import {legacy_createStore as createStore} from 'redux';

import appEnhancers from './enhancers';
import appReducers from './reducers';

const store = createStore(
  appReducers,
  appEnhancers
);

export default store;