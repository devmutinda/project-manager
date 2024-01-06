import { forwardRef } from "react"
 const Tasks = forwardRef(function Tasks({ project, addTask, deleteTask }, ref) {
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <div className="flex items-center gap-4">
                <input ref={ref} className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
                <button onClick={addTask} className="text-stone-800 hover:text-stone-950">Add task</button>
            </div>

            {project.tasks.length > 0 && 
                <ul className="p-4 mt-8 rounded-md bg-stone-100">
                    {project.tasks.map((task, index) => (
                        <li key={index} className="flex justify-between my-4">
                            <span className="text-stone-600 whitespace-pre-wrap">{task}</span>
                            <button onClick={() => deleteTask(index)} className="text-stone-700 hover:text-red-500">Clear</button>
                        </li>
                    ))}
                </ul>
            }    
            {project.tasks.length === 0 && <p className="text-stone-800 my-4"> This project does not have any tasks yet.</p> }
        </section>
    )

})

export default Tasks;