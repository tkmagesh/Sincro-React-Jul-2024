
import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux';
import * as projectActionCreators from './actions';
import { bindActionCreators } from "redux";

function Projects(){
    // const projects = useSelector(storeState => storeState.projectsState)
    const projects = useSelector(({projectsState}) => projectsState)
    const dispatch = useDispatch();
    const {addNew, load} = bindActionCreators(projectActionCreators, dispatch)
    const [newProjectName, setNewProjectName] = useState('');
    return (
      <>
        <h3>Projects</h3>
        <div>
          <button onClick={load}>Load Projects</button>
        </div>
        <label>Project Name :</label>
        <input
          type="text"
          onInput={(evt) => setNewProjectName(evt.target.value)}
        />
        <button onClick={() => addNew(newProjectName)}>
          Add New
        </button>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>{project.name}</li>
          ))}
        </ul>
      </>
    );
}

export default Projects