import axios from 'axios'

let serviceEndPoint = "http://localhost:3030/projects";

async function loadProjects(){
    const response = await axios.get(serviceEndPoint)
    return response.data
}

async function saveProject(projectData){
    if (projectData.id === 0){
        const response = await axios.post(serviceEndPoint, projectData);
        return response.data
    } else {
        const response = await axios.put(`${serviceEndPoint}/${projectData.id}`, projectData);
        return response.data;
    }
}

async function removeProject(projectData) {
    const response = await axios.delete(`${serviceEndPoint}/${projectData.id}`);
    return response.data;
}

const projectApi = {
    loadProjects,
    saveProject,
    removeProject
}

export default projectApi;
