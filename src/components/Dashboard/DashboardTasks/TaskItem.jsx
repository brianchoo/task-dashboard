import { useContext, useState } from "react";
import styled from "styled-components";
import EditIcon from "../../../assets/svg/pen-solid.svg";
import DeleteIcon from "../../../assets/svg/trash-solid.svg";
import { TasksContext } from "../../../context/tasksContext";
import { useTaskModal } from "../../../hooks/useTaskModal";
import EditTask from "../../Task/EditTask";

const TaskItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 0;

  &:not(:last-child) {
    border-bottom: 2px solid #e8e8e8;
  }
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 16px;
  cursor: pointer;
  accent-color: var(--color-blue);
`;

const TaskText = styled.span`
  flex: 1;
  font-size: 20px;
  color: ${(props) => (props.completed ? "#537178" : "#5285EC")};
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
`;

const ActionButton = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f3f4f6;
  }

  img {
    width: 20px;
    height: 20px;
    opacity: 1;
  }
`;

const TaskItem = ({ id, text, completed }) => {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskText, setEditingTaskText] = useState("");
  const { tasks, handleDelete, handleToggle } = useContext(TasksContext);
  const { isOpenModal, handleEditTaskModal, handleCancelNewTask } =
    useTaskModal();

  const handleTaskItemEdit = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    if (taskToEdit) {
      setEditingTaskId(taskToEdit.id);
      setEditingTaskText(taskToEdit.text);
      handleEditTaskModal();
    }
  };

  return (
    <TaskItemContainer>
      <Checkbox
        type="checkbox"
        checked={completed}
        onChange={() => handleToggle(id)}
      />
      <TaskText completed={completed}>{text}</TaskText>
      <ActionButtons>
        <ActionButton onClick={() => handleTaskItemEdit(id)} type="button">
          <img src={EditIcon} alt="Edit" />
        </ActionButton>
        <ActionButton onClick={() => handleDelete(id)} type="button">
          <img src={DeleteIcon} alt="Delete" />
        </ActionButton>
      </ActionButtons>
      <EditTask
        taskId={editingTaskId}
        initialText={editingTaskText}
        isOpenModal={isOpenModal}
        onCancel={handleCancelNewTask}
      />
    </TaskItemContainer>
  );
};

export default TaskItem;
