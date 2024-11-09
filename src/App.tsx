import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";

export interface Project {
  id: number;
  title: string;
  description: string;
  dueDate: string;
}

export interface ProjectState {
  selectedProjectId: undefined | null;
  projects: Project[];
}

function App() {
  const [projectState, setProjectState] = useState<ProjectState>({
    selectedProjectId: undefined,
    projects: [],
  });

  

  const handleStartAddProject = () => {
    setProjectState((prevState) => ({ ...prevState, selectedProjectId: null }));
  };

  const handleCancelAddProject = () => {
    setProjectState((prevState) => ({ ...prevState, selectedProjectId: undefined }));
  };

  const handleAddProject = (projectData: Project) => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId:undefined,
      projects: [...prevState.projects, projectData],
    }));
  };

  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAddProject={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8 ">
      <ProjectsSidebar projects={projectState.projects} onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
