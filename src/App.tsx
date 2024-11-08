import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";

interface Project {
  title: string;
  description: string;
  date: number;
}

interface ProjectState {
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
  

  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8 ">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
