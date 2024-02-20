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
  
  function handleSaveProject(projectData){
    const newProject ={
      ...projectData,
      id : Math.random(),
    }
    setProjectState((prevState)=>{
      return {
        ...prevState,
        projects : [...prevState.projects, newProject],
      }
    })
  }

  console.log(projectState);

  let content; 
  if(projectState.selectedProjectId === null){
    content = <NewProject onSaveProject={handleSaveProject}/>
  }
  else if(projectState.selectedProjectId === undefined){
    content =  <NoProjectSelected onAddProject={handleAddProject} />
  }
  
  return (
    <main className="h-screen my-8 flex gap-8">
    <ProjectSidebar onAddProject={handleAddProject} />
    {content}
    </main>
  );
}

export default App;
