let _currentProjectId = 3;
export function addNew(newProjectName) {
  return {
    type: "PROJECTS_ADD",
    payload: {
      id: ++_currentProjectId,
      name: newProjectName,
    },
  };
}
