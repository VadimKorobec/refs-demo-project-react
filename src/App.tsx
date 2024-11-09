import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";

export interface Task {
  id: number;
  text: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  dueDate: string;
}

export interface ProjectState {
  selectedProjectId: undefined | null | number;
  projects: Project[];
  tasks: Task[];
}

function App() {
  const [projectState, setProjectState] = useState<ProjectState>({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleSelectProject = (id: number) => {
    setProjectState((prevState) => ({ ...prevState, selectedProjectId: id }));
  };

  const handleStartAddProject = () => {
    setProjectState((prevState) => ({ ...prevState, selectedProjectId: null }));
  };

  const handleCancelAddProject = () => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  };

  const handleAddProject = (projectData: Project) => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: [...prevState.projects, projectData],
    }));
  };

  const handleDeleteProject = (id: number) => {
    const newState = projectState.projects.filter(
      (project) => project.id !== id
    );
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: newState,
    }));
  };

  const handleAddTask = (text: string) => {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        id: taskId,
        projectId: prevState.selectedProjectId,
        text: text,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  };

  const handleDeletTask = (id: number) => {
    const newState = projectState.tasks.filter((task) => task.id !== id);
    setProjectState((prevState) => ({
      ...prevState,
      tasks: newState,
    }));
  };

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  let content;

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        onAddProject={handleAddProject}
        onCancel={handleCancelAddProject}
      />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else if (selectedProject) {
    content = (
      <SelectedProject
        onDelete={handleDeleteProject}
        project={selectedProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeletTask}
        tasks={projectState.tasks}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8 ">
      <ProjectsSidebar
        projects={projectState.projects}
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
        
      />
      {content}
    </main>
  );
}

export default App;
