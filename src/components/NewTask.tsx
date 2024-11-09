import { useState } from "react";

interface NewTaskProps {
  onAddTask: (text: string) => void;
}

const NewTask = ({ onAddTask }: NewTaskProps) => {
  const [enteredTask, setEnteredTask] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredTask(e.target.value);
  };

  const handleClick = () => {
    if (enteredTask.trim() === "") {
      return;
    }
    onAddTask(enteredTask);
    reset();
  };

  const reset = () => {
    setEnteredTask("");
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        value={enteredTask}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
