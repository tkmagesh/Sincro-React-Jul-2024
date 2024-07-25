// TODO: fix
let _currentBugId = 3
export function createNew(newBugName) {
  const newBug = {
    id: ++_currentBugId, // to be fixed
    name: newBugName,
    isClosed: false,
    createdAt: new Date(),
  };
  const action = { type: "BUGS_ADD", payload: newBug };
  return action;
}