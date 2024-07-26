import BugItem from './bugItem';
import * as bugActionCreators from '../actions'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

const BugList = ({ bugs }) => {
  const {toggle, remove, removeClosed} = bindActionCreators(bugActionCreators, useDispatch())
  const bugItems = bugs.map((bug) => {
    return <BugItem key={bug.id} bug={bug} {...{ toggle, remove }} />;
  });

  return (
    <section className="list">
      <ul>{bugItems}</ul>
      <button onClick={() => removeClosed()}>Remove Closed</button>
    </section>
  );
};

export default BugList;