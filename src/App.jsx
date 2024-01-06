import SideBar from "./components/SideBar";
import NoProject from "./components/NoProject"
import CreateProject from "./components/CreateProject"
import ViewProject from "./components/ViewProject";
import { useState } from "react";

function App() {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({viewProject: false});
  const [isCreateProject, setIsCreateProject] = useState(false);

  function showCreateProject(bool=true) {
    setProject((prevProject) =>
      ({
        ...prevProject,
        viewProject: false,
      })
    );
    setIsCreateProject(bool);
  }

  function saveProject(newProject) {
    setProjects((prevProjects) => {
      return [
        ...prevProjects,
        newProject,
      ];
    });
    setIsCreateProject(false);
  }

  function showProjectDetails(selectedProject, index) {
    setProject({ ...selectedProject, index, viewProject: true });
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
  }

  function deleteTask(i) {
    setProject((prev) => {
      const tasks = [...prev.tasks];
      tasks.splice(i, 1);
      // console.log(tasks);
      return { ...prev, tasks };
    });
  }

  function deleteProject() {
    setProjects((prev) => {
      const prevProjects = [...prev];
      prevProjects.splice(project.index, 1);
      // console.log(prevProjects)
      return prevProjects;
    });

    setProject({ viewProject: false });
  }

  if (project.viewProject) {
    projects[project.index] = project;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideBar selectedIndex={project.index} onViewProject={showProjectDetails} projects={projects} isCreateProject={isCreateProject} onSelect={showCreateProject}/>
        {project.viewProject ? 
          <ViewProject deleteProject={deleteProject} deleteTask={deleteTask} updateProject={saveTask} project={project}/> 
          : isCreateProject ? 
          <CreateProject onSave={saveProject}  onSelect={showCreateProject}/> 
          :
          <NoProject onSelect={showCreateProject} />
        }
      </main>
    </>
  );
}

export default App;
