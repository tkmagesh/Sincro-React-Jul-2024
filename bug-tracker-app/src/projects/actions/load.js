import axios from 'axios';

function getInMemoryProjects(){
    const projectsInMemory = [
      { id: 1, name: "Bug Tracker" },
      { id: 2, name: "Time Manager" },
    ];
    return projectsInMemory
}

async function getServerProjects(){
    const response = await axios.get('http://localhost:3030/projects')
    const projects = response.data
    return projects
}


// inMemory
/* 
export function load(){
    const projects = getInMemoryProjects();
    const action = { type: "PROJECTS_INIT", payload: projects };
    return action; 
} 
*/

// Server communication using asyncMiddleware
/* 
export function load(){
    return function(dispatch){
        const p = getServerProjects()
        p.then(projects => {
            const action = { type: "PROJECTS_INIT", payload: projects };
            dispatch(action);
        })
    } 
}
*/

// Server communication using promiseMiddleware
export function load() {
    const p = getServerProjects();
    const p2 = p.then((projects) => {
      const action = { type: "PROJECTS_INIT", payload: projects };
      return action
    });
    return p2;
}