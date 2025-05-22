import React, { useState } from "react";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import DisplayPage from "./components/DisplayPage";

const App = () => {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: [],
  });

  const handleProjectState = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  };

  const updateProjects = () => {};

  const onCancel = () => {
    setProjectState((prevState) => {
      return {
        selectedProject: undefined,
        projects: [...prevState.projects],
      };
    });
  };

  const handleAddProject = (project) => {
    debugger;
    const newProject = {
      ...project,
      id: Math.random(),
    };
    setProjectState((prevState) => {
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  console.log("project state", projectState);
  return (
    <main className="h-screen flex  bg-stone-200 gap-8 rounded-md">
      <ProjectsSidebar
        handleProjectState={handleProjectState}
        projects={projectState.projects}
      />
      {projectState.selectedProject !== undefined ? (
        <NewProject onAdd={handleAddProject} onCancel={onCancel}/>
      ) : (
        <DisplayPage handleProjectState={handleProjectState} />
      )}
    </main>
  );
};

export default App;
