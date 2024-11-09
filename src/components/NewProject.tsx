import { useRef } from "react";
import Input from "./Input";
import { Project } from "../App";
import Modal, { ModalHandle } from "./Modal";

interface NewProjectProps {
  onCancel: () => void;
  onAddProject: (data: Project) => void;
}

const NewProject = ({ onAddProject, onCancel }: NewProjectProps) => {
  const titleRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const descriptionRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const dueDateRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const modalRef = useRef<ModalHandle>(null);

  const handleSave = () => {
    if (
      titleRef.current?.value.trim() === "" ||
      descriptionRef.current?.value.trim() === "" ||
      dueDateRef.current?.value.trim() === ""
    ) {
      if (modalRef.current) {
        modalRef.current.open();
        return;
      }
    }
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
    <>
      <Modal ref={modalRef} buttonCaption="Okey">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
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
    </>
  );
};

export default NewProject;
