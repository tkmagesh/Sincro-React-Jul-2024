export function toggle(bugToToggle) {
  const toggledBug = { ...bugToToggle, isClosed: !bugToToggle.isClosed };
  const action = { type: "BUGS_REPLACE", payload: toggledBug };
  return action;
}