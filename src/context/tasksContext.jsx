import { createContext, useState } from "react";

export const TasksContext = createContext(null);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  console.log(tasks, "tasks");

  const handleAddTask = (text) => {
    setTasks((prevTasks) => {
      const taskId = Math.floor(Math.random() * 100000) + 1;
      const newTask = {
        id: taskId,
        text: text,
        complete: false,
      };

      return [newTask, ...prevTasks];
    });
  };

  return (
    <TasksContext.Provider value={{ tasks, handleAddTask }}>
      {children}
    </TasksContext.Provider>
  );
};
