import NewProject from "./component/NewProject";
import NoProject from "./component/NoProject";
import ProjectSideBar from "./component/ProjectSideBar";
import { useState } from "react";
function App() {
  const [projectState, setProjectState] = useState({
    setProjectId: undefined,
    projects: [],
  });
  function handleAddingNewProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        setProjectId: null,
      };
    });
  }
  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const projectID = Math.random();
      const newProject = {
        ...projectData,
        id: projectID,
      };
      return {
        ...prevState,
        setProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }
  console.log(projectState);
  let content;
  if (projectState.setProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (projectState.setProjectId === undefined) {
    content = <NoProject onAddingProject={handleAddingNewProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar onAddingProject={handleAddingNewProject} />
      {content}
    </main>
  );
}

export default App;
