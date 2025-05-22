import { useContext } from "react";
import styled from "styled-components";
import { TasksContext } from "../../../context/tasksContext";
import Card from "../../Card/Card";

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PieChart = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: ${(props) => `conic-gradient(
    #5285EC 0deg ${props.completedDegrees}deg,
    #E8ECEC ${props.completedDegrees}deg 360deg
  )`};
`;

const TasksChart = () => {
  const { tasks } = useContext(TasksContext);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const completedPercentage =
    totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  const completedDegrees = (completedPercentage / 100) * 360;

  return (
    <>
      <Card>
        <ChartContainer>
          <PieChart completedDegrees={completedDegrees} />
        </ChartContainer>
      </Card>
    </>
  );
};

export default TasksChart;
