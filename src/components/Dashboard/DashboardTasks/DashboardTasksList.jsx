import { useContext } from "react";
import TaskTopBar from "./TaskTopBar";
import TasksList from "./TasksList";
import { TasksContext } from "../../../context/tasksContext";

const DashboardTasksList = () => {
  const { tasks } = useContext(TasksContext);
  return (
    <>
      <TaskTopBar />
      <TasksList tasks={tasks} />
    </>
  );
};

export default DashboardTasksList;
