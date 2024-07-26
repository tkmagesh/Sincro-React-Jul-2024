
/* 
import logMiddleware from "./logMiddleware";
import asyncMiddleware from './asyncMiddleware'
import promiseMiddeware from "./promiseMiddleware";
import { applyMiddleware } from "redux";

const appEnhancers = applyMiddleware(logMiddleware, asyncMiddleware, promiseMiddeware)

export default appEnhancers; 
*/

import { logger } from "redux-logger";
import { thunk } from "redux-thunk";
import { applyMiddleware } from "redux";
import promiseMiddeware from "./promiseMiddleware";
const appEnhancers = applyMiddleware(
  logger,
  thunk,
  promiseMiddeware
);

export default appEnhancers; 