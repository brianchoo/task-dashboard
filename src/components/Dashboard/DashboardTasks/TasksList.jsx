import styled from "styled-components";
import TaskItem from "./TaskItem";

const TaskListContainer = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 0 16px;
`;

const TasksListInner = styled.div`
  display: flex;
  flex-direction: column;
`;

const TasksList = ({ tasks }) => {
  return (
    <TaskListContainer>
      <TasksListInner>
        {tasks?.length === 0
          ? "No task found."
          : tasks.map((task) => (
              <TaskItem
                key={task.id}
                id={task.id}
                text={task.text}
                completed={task.completed}
              />
            ))}
      </TasksListInner>
    </TaskListContainer>
  );
};

export default TasksList;
