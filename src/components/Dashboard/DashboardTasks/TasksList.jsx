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
        {tasks.map((todo) => (
          <TaskItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
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
