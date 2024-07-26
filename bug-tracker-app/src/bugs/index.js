import {useSelector, useDispatch} from 'react-redux';

import './index.css';

import BugStats from "./views/bugStats";
import BugEdit from "./views/bugEdit";
import BugSort from "./views/bugSort";
import BugList from "./views/bugList";
import { createNew} from './actions/createNew'
import { bindActionCreators } from 'redux';

function Bugs() {
  const {bugs, closedCount} = useSelector(({bugsState}) => {
    return {
      bugs : bugsState,
      closedCount : bugsState.reduce(
        (prevResult, bug) => (bug.isClosed ? prevResult + 1 : prevResult),
        0
      )}
  });

  const dispatch = useDispatch() // => store.dispatch
  const createNewActionDispatcher = bindActionCreators(createNew, dispatch);

  return (
    <>
      <h3>Bugs</h3>
      <BugStats count={bugs.length} closedCount={closedCount} />
      <BugEdit createNew={createNewActionDispatcher} />
      <BugSort />
      <BugList bugs={bugs} />
    </>
  );
}
export default Bugs;