import { createContext, useState, useEffect } from "react";

export const TasksContext = createContext(null);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("allTasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("allTasks", JSON.stringify(tasks));
  }, [tasks]);

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

  const handleToggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleEdit = (id, newText) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <TasksContext.Provider
      value={{ tasks, handleAddTask, handleToggle, handleDelete, handleEdit }}
    >
      {children}
    </TasksContext.Provider>
  );
};
