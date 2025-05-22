import styled from "styled-components";
import Card from "../../Card/Card";
import { TasksContext } from "../../../context/tasksContext";
import { useContext } from "react";

const Title = styled.div`
  font-size: 20px;
  color: var(--color-dark-green);
  margin-bottom: 12px;
`;

const FractionContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

const Numerator = styled.span`
  font-size: 64px;
  color: var(--color-blue);
  font-weight: normal;
  position: relative;
  top: -5px;
`;

const Denominator = styled.span`
  font-size: 20px;
  color: #80868b;
`;

const TaskCompleted = () => {
  const { tasks } = useContext(TasksContext);
  const completedTasksCount = tasks.filter((task) => task.completed).length;
  return (
    <>
      <Card>
        <Title>Task Completed</Title>
        <FractionContainer>
          <Numerator>{completedTasksCount}</Numerator>
          <Denominator>/{tasks.length}</Denominator>
        </FractionContainer>
      </Card>
    </>
  );
};

export default TaskCompleted;
