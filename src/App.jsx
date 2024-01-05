import SideTab from "./components/SideTab";
import NoProject from "./components/NoProject"
import CreateProject from "./components/CreateProject"
import ViewProject from "./components/ViewProject";
import { useState, useRef } from "react";

function App() {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({});
  const [viewProject, setViewProject] = useState(false);
  const [isCreateProject, setIsCreateProject] = useState(false);
  // let project = useRef();
  function showCreateProject(bool=true) {
    setViewProject(false);
    setIsCreateProject(bool);
  }

  function saveProject(newProject) {
    setProjects((prevProjects) => {
      return [
        ...prevProjects,
        newProject
      ];
    });
    setIsCreateProject(false);
  }

  function showProjectDetails(selectedProject, index) {
    // project.current = selectedProject;
    console.log({...selectedProject, index});
    setProject({...selectedProject, index});
    setViewProject(true);
  }

  function saveTask(task) {
    setProject(prev => {
      const prevTasks = prev.tasks;
      const tasks = [
          ...prevTasks,
          task,
      ]

      return { ...prev,tasks, }
    });
    if (setViewProject) {
      projects[project.index] = project;
    }
  }
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideTab onViewProject={showProjectDetails} projects={projects} isCreateProject={isCreateProject} onSelect={showCreateProject}/>
        {!isCreateProject && !viewProject  && <NoProject onSelect={showCreateProject} />}
        {isCreateProject && !viewProject && <CreateProject onSave={saveProject}  onSelect={showCreateProject}/>}
        {viewProject && <ViewProject updateProject={saveTask} project={project}/>}
      </main>
    </>
  );
}

export default App;
