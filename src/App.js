import NewProject from "./component/NewProject";
import NoProject from "./component/NoProject";
import ProjectSideBar from "./component/ProjectSideBar";
import SelectedProject from "./component/SelectedProject";
import { useState } from "react";

export default function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined, // ✅ renamed for clarity
    projects: [],
  });

  function handleAddingNewProject() {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: null, // starting a new project
    }));
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
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: id,
    }));
  }

  function handleCancel() {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  }
  function handleDeleteProject() {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: projectState.projects.filter(
        (project) => project.id !== prevState.selectedProjectId
      ),
    }));
  }
  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  let content = (
    <SelectedProject project={selectedProject} onDelete={handleDeleteProject} />
  );

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProject onAddingProject={handleAddingNewProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        onAddingProject={handleAddingNewProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}
