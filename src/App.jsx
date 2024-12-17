import { useEffect, useState } from "react";
import AllProjects from "./components/AllProjects";
import EmptyBanner from "./components/EmptyBanner";
import ProjectCreater from "./components/ProjectCreater";
import CreatedProject from "./components/CreatedProject";

function App() {
  const [showEmpty, setShowEmpty] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [allProjects,setAllProjects] = useState([])

  useEffect(()=>{
    setSelectedProject((project)=>allProjects.find((proj)=>proj.id===project.id)) 
  },[allProjects])
  

  const openProjectCreater = () => {
    setShowEmpty(false);
  };

  const saveProjectDetails=(project)=>{
    setAllProjects(outdatedProjects=>[...outdatedProjects,project])
    setShowEmpty(true)
  }


  const openProject =(projectId)=>{
    setShowEmpty(()=>false);
    setSelectedProject(()=>{
      const project = allProjects.find((p)=>p.id===projectId)
      return project;
    });

  }

  const taskHandler=(updatedTasks)=>{
    setAllProjects((previousProjects)=>{
      const previousProjectsCopy = JSON.parse(JSON.stringify(previousProjects));
      let project = previousProjectsCopy.find((proj)=>proj.id===selectedProject.id);
      project={...project,tasks:[...updatedTasks]};
      return previousProjectsCopy
  })
  }

  return (
    <>
      <div className="flex gap-5 w-full bg-slate-100 h-screen pt-20 px-10">
        <div className="w-1/5 h-screen">
          <AllProjects openProjectCreater={openProjectCreater} allProjects={allProjects} openProject={openProject} selectedProject={selectedProject}/>
        </div>
        <div className="w-4/5 h-screen">
          {showEmpty ? (
            <EmptyBanner openProjectCreater={openProjectCreater} />
          ) : !selectedProject ? (
            <ProjectCreater saveProjectDetails={saveProjectDetails}/>
          ) : (
            <CreatedProject selectedProject={selectedProject} taskHandler={taskHandler}/>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
