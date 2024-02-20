import ProjectSidebar from "./Components/ProjectSidebar";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import { useState } from "react";
function App() {

  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  })

  function handleAddProject(){
    setProjectState((prevState)=>{
     return {
      ...prevState,
      selectedProjectId : null,
     }

    })
  }

  function handleCancelAddProject(){
    setProjectState((prevState)=>{
      return {
        ...prevState,
        selectedProjectId : undefined,
      }
    })
  }
  
  function handleSaveProject(projectData){
    const newProject ={
      ...projectData,
      id : Math.random(),
    }
    setProjectState((prevState)=>{
      return {
        selectedProjectId : undefined,
        projects : [...prevState.projects, newProject],
      }
    })
  }


  let content; 
  if(projectState.selectedProjectId === null){
    content = <NewProject onSaveProject={handleSaveProject} onCancelProject={handleCancelAddProject}/>
  }
  else if(projectState.selectedProjectId === undefined){
    content =  <NoProjectSelected onAddProject={handleAddProject} />
  }
  
  return (
    <main className="h-screen flex gap-8">
    <ProjectSidebar onAddProject={handleAddProject} projects={projectState.projects} />
    {content}
    </main>
  );
}

export default App;
