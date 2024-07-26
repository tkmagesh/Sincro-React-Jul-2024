
export function createNew(newBugName) {
  const newBug = {
    id: 0, 
    name: newBugName,
    isClosed: false,
    createdAt: new Date(),
  };
  const action = { type: "BUGS_ADD", payload: newBug };
  return action;
}