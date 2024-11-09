import { Task } from "../App";
import NewTask from "./NewTask";

interface TasksProps {
  tasks: Task[];
  onAddTask: (text: string) => void;
  onDeleteTask: (id: number) => void;
}

const Tasks = ({ onAddTask, onDeleteTask, tasks }: TasksProps) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask} />
      {tasks.length === 0 ? (
        <p className="text-stone-800 my-4">
          This project doesn't have any tasks yet.
        </p>
      ) : (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDeleteTask(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Tasks;
