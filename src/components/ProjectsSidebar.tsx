import Button from "./Button";

interface ProjectSidebarProps{
  onClick: () => void;
}

const ProjectsSidebar = ({onClick}:ProjectSidebarProps) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onClick}>+ Add Project</Button>
      </div>
      <ul></ul>
    </aside>
  );
};

export default ProjectsSidebar;
