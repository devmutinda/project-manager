export default function SideBar({
  onSelect,
  projects,
  onViewProject,
  selectedIndex,
}) {
  function handleClick(i) {
    const selectedProject = projects[i];

    onViewProject(selectedProject, i);
  }
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your projects
      </h2>
      <div>
        <button
          onClick={onSelect}
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        >
          + Add Project
        </button>
      </div>

      <ul className="mt-8 mb-4 text-stone-400">
        {projects.map((project, index) => {
          let cssClasses =
            'w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800';

          if (index === selectedIndex) {
            cssClasses =
              'w-full text-left px-2 py-1 rounded-sm my-1 text-stone-200 bg-stone-800';
          }
          return (
            <li>
              <button
                className={cssClasses}
                key={index}
                onClick={() => handleClick(index)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
