import { useRef } from "react";
import Input from "./Input";
import { Project } from "../App";

interface NewProjectProps {
  onAddProject: (data: Project) => void;
}

const NewProject = ({ onAddProject }: NewProjectProps) => {
  const titleRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const descriptionRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const dueDateRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const handleSave = () => {
    if (titleRef.current && descriptionRef.current && dueDateRef.current) {
      const newProject = {
        id: Math.random(),
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        dueDate: dueDateRef.current.value,
      };
      onAddProject(newProject);
    }
  };

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={titleRef} label="Title" />
        <Input ref={descriptionRef} label="Description" textarea />
        <Input type="date" ref={dueDateRef} label="Due Date" />
      </div>
    </div>
  );
};

export default NewProject;
