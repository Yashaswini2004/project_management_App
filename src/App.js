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
  let content;
  if (projectState.setProjectId === null) {
    content = <NewProject />;
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
