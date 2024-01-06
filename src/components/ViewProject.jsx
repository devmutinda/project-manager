import { useRef } from "react";
import Header from "./Header";

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
           
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <div className="flex items-center gap-4">
                <input ref={newTask} className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
                <button onClick={addTask} className="text-stone-800 hover:text-stone-950">Add task</button>
            </div>

            {project.tasks.length > 0 && 
                <ul className="p-4 mt-8 rounded-md bg-stone-100">
                    {project.tasks.map((task, index) => (
                        <li key={index} className="flex justify-between my-4">
                            <p className="text-stone-600 whitespace-pre-wrap">{task}</p>
                            <button onClick={() => deleteTask(index)} className="text-stone-700 hover:text-red-500">Clear</button>
                        </li>
                    ))}
                </ul>
            }    
        </div>
    )
}