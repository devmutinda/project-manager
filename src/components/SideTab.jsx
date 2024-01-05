export default function SideTab({ onSelect, projects, onViewProject }) {
    function handleClick(i) {
        const selectedProject = projects[i];

        onViewProject(selectedProject, i);
    }
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your projects</h2>
            <button onClick={onSelect} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">+ Add Project</button>
            <p className="mt-8 mb-4 text-stone-400">
                {projects.map((project, index) => (
                    <button key={index} onClick={() => handleClick(index)} className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800">{project.title}</button>
                ))}
            </p>

        </aside>
    )
    
}