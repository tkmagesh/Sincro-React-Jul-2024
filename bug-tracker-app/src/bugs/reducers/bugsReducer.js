let initialState = [
  {
    id: 1,
    name: "Server communication failure",
    isClosed: true,
    createdAt: new Date(),
  },
  {
    id: 2,
    name: "User actions not recognized",
    isClosed: false,
    createdAt: new Date(),
  },
  {
    id: 3,
    name: "Authentication failure",
    isClosed: true,
    createdAt: new Date(),
  },
];

function bugsReducer(currentState = initialState, action) {
  switch (action.type) {
    case "BUGS_ADD":
      const newBug = action.payload;
      return [...currentState, newBug];
    case "BUGS_REPLACE":
      const bugToReplace = action.payload;
      return currentState.map((bug) =>
        bug.id === bugToReplace.id ? bugToReplace : bug
      );
    case "BUGS_REMOVE":
      const bugToRemove = action.payload;
      return currentState.filter((bug) => bug.id !== bugToRemove.id);
    case "BUGS_REMOVE_CLOSED":
      return currentState.filter((bug) => !bug.isClosed);
    case "BUGS_INIT":
      return action.payload;
    default:
      return currentState;
  }
}
export default bugsReducer;
