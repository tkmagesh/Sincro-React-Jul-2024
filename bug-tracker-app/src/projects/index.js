
import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux';
import {addNew } from './actions/addNew';

function Projects(){
    // const projects = useSelector(storeState => storeState.projectsState)
    const projects = useSelector(({projectsState}) => projectsState)
    const dispatch = useDispatch();
    const [newProjectName, setNewProjectName] = useState('');
    return (
        <>
            <h3>Projects</h3>
            <label>Project Name :</label>
            <input type="text" onInput={evt => setNewProjectName(evt.target.value)}/>
            <button onClick={() => dispatch(addNew(newProjectName))}>Add New</button>
            <ul>
                {projects.map(project => (<li key={project.id}>{project.name}</li>))}
            </ul>
        </>
    )
}

export default Projects