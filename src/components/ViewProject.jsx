import { useRef, useState } from "react"

export default function ViewProject({ project, updateProject }) {
    // console.log(project);
    const newTask = useRef();

    function addTask() {
        updateProject(newTask.current.value);
        newTask.current.value = '';
    }
    return (
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                    <button className="text-stone-600 hover:text-stone-950">Delete</button>
                </div>
                <p className="mb-4 text-stone-400">{project.dueDate}</p>
                <p className="text-stone-800">{project.description}</p>
            </header>
                
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <div className="flex items-center gap-4">
                <input ref={newTask} className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
                <button onClick={addTask} className="text-stone-800 hover:text-stone-950">Add task</button>
            </div>

            {project.tasks && 
                <ul className="p-4 mt-8 rounded-md bg-stone-100">
                    {project.tasks.map((task, index) => (
                        <li key={index} className="flex justify-between my-4">
                            <p className="text-stone-600 whitespace-pre-wrap">{task}</p>
                            <button className="text-stone-700 hover:text-red-500">Clear</button>
                        </li>
                    ))}
                </ul>
            }

            
        </div>
        
    )
}