import TaskCompleted from "./TasksCompleted";
import LatestTasks from "./LatestTasks";
import TasksChart from "./TasksChart";

const DashboardTasksCards = () => {
  return (
    <>
      <TaskCompleted />
      <LatestTasks />
      <TasksChart />
    </>
  );
};

export default DashboardTasksCards;
