import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import * as projectActionCreators from "../actions";
import { bindActionCreators } from "redux";

export default function useProjects(){
    const projects = useSelector(({ projectsState }) => projectsState);
    const dispatch = useDispatch();
    const { addNew, load } = bindActionCreators(
      projectActionCreators,
      dispatch
    );
    useEffect(() => {
      load();
    }, []);
    const [newProjectName, setNewProjectName] = useState("");
    return { projects, addNew, newProjectName, setNewProjectName }
}