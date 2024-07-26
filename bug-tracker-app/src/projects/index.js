import { useState } from "react"

function Projects({projects, addNew}){
    const [newProjectName, setNewProjectName] = useState('');
    return (
        <>
            <h3>Projects</h3>
            <label>Project Name :</label>
            <input type="text" onInput={evt => setNewProjectName(evt.target.value)}/>
            <button onClick={() => addNew(newProjectName)}>Add New</button>
            <ul>
                {projects.map(project => (<li key={project.id}>{project.name}</li>))}
            </ul>
        </>
    )
}

export default Projects