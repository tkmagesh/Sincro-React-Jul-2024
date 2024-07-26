/* 
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
*/

import projectApi from "../services/projectsApi";
export async function addNew(newProjectName){
  const newProjectData = {
    id : 0,
    name : newProjectName
  }
  const newProject = await projectApi.saveProject(newProjectData);
  const action = { type : 'PROJECTS_ADD', payload : newProject}
  return action;
}
