import ProjectSidebar from "./Components/ProjectSidebar";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import { useState } from "react";
import SelectedProject from "./Components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  

  function addTask(text) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projects: prevState.projects.map((project) => {
          if (project.id === projectState.selectedProjectId) {
            return {
              ...project,
              tasks: [...project.tasks, text],
            };
          }
          return project;
        }),
      }
    });
  }

  function deleteTask(taskIndex, project){

    setProjectState((prevState) => {
      return {
        ...prevState,
        projects: prevState.projects.map((project) => {
          if (project.id === projectState.selectedProjectId) {
            return {
              ...project,
              tasks: project.tasks.filter((task, index)=>{
                return index != taskIndex
              }),
            };
          }
          return project;
        }),
      }
    });
  }

  

  function handleAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleSaveProject(projectData) {
    const newProject = {
      ...projectData,
      id: Math.random(),
    };
    setProjectState((prevState) => {
      return {
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }


  



  const selectedProject = projectState.projects.find((project) => {
    return project.id == projectState.selectedProjectId;
  });
  

  let content = <SelectedProject project={selectedProject} onDeleteProject={handleDeleteProject} onAddTask={addTask} deleteTask={deleteTask} />;
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        onSaveProject={handleSaveProject}
        onCancelProject={handleCancelAddProject}
      />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProject={handleAddProject} />;
  }

  function handleDeleteProject(projectToDelete){
    const indexToDelete = projectState.projects.indexOf(projectToDelete);
    setProjectState((prevState)=>{
      return {
        selectedProjectId : undefined,
        projects : projectState.projects.filter((item, index)=>{
          return index != indexToDelete
        })
      }
    })
  }


  return (
    <main className="h-screen flex gap-8">
      <ProjectSidebar
        onAddProject={handleAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={(selectedProject) ? selectedProject.id : undefined}
      />
      {content}
    </main>
  );
}

export default App;
