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

const TasksList = ({ tasks, onEdit, onDelete, onToggle }) => {
  return (
    <TaskListContainer>
      <TasksListInner>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            onToggle={onToggle}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </TasksListInner>
    </TaskListContainer>
  );
};

export default TasksList;
