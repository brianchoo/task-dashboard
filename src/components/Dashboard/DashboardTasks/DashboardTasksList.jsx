import { useContext, useState, useMemo } from "react";
import TaskTopBar from "./TaskTopBar";
import TasksList from "./TasksList";
import { TasksContext } from "../../../context/tasksContext";

const DashboardTasksList = () => {
  const { tasks } = useContext(TasksContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTasks = useMemo(() => {
    if (!searchTerm) return tasks;
    return tasks.filter((task) =>
      task.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [tasks, searchTerm]);

  return (
    <>
      <TaskTopBar
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
      />
      <TasksList tasks={filteredTasks} />
    </>
  );
};

export default DashboardTasksList;
