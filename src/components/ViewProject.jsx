import { useRef } from "react";
import Header from "./Header";
import Tasks from "./Tasks";

export default function ViewProject({ project, updateProject, deleteTask, deleteProject }) {
    // console.log(project);
    const newTask = useRef();

    function addTask() {
        if (newTask.current.value) {
            updateProject(newTask.current.value);
        }
        newTask.current.value = '';
    }
    return (
        <div className="w-[35rem] mt-16">
            <Header project={project} onSelect={deleteProject} />
            <Tasks ref={newTask} project={project} deleteTask={deleteTask} addTask={addTask}/>
            
        </div>
    )
}