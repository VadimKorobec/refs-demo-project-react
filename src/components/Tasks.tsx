import { useState } from "react";

interface Task {
  title: string;
}

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      
      {tasks.length === 0 ? (
        <p className="text-stone-800 mb-4">
          This project doesn't have any tasks yet.
        </p>
      ) : (
        <ul></ul>
      )}
    </section>
  );
};

export default Tasks;
