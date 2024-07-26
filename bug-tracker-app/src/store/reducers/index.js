import bugsReducer from "../../bugs/reducers/bugsReducer";
import projectsReducer from "../../projects/reducers/projectsReducer";
import {combineReducers} from "redux";

const appReducers = combineReducers({
  bugsState: bugsReducer,
  projectsState: projectsReducer,
});

export default appReducers