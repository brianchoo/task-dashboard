import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import Modal from "../Modal/Modal";
import { TasksContext } from "../../context/tasksContext";
import { BREAKPOINT } from "../../constants/breakpoints";

const TaskCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width: 100%;
`;

const Title = styled.div`
  font-size: 20px;
  color: var(--color-dark-green);
  margin-bottom: 24px;

  @media (min-width: ${BREAKPOINT.MD}) {
    font-size: 24px;
  }
`;

const Button = styled.button`
  width: 100%;
  margin: 0 auto;
  padding: 12px;
  background-color: var(--color-blue);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #3b67e6;
  }

  &:disabled {
    background-color: #93c5fd;
    cursor: not-allowed;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: none;
  border-radius: 8px;
  background-color: var(--color-grey);
  color: var(--color-dark-grey);
  font-size: 14px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-blue);
  }
`;

const TaskModal = ({
  isOpenModal,
  onCancel,
  mode = "add",
  taskId = null,
  initialText = "",
}) => {
  const [taskText, setTaskText] = useState("");
  const { handleAddTask, handleEdit } = useContext(TasksContext);

  const isEditMode = mode === "edit";

  useEffect(() => {
    if (isEditMode) {
      setTaskText(initialText || "");
    } else {
      setTaskText("");
    }
  }, [initialText, isEditMode, isOpenModal]);

  const handleSubmit = () => {
    if (taskText.trim() !== "") {
      if (isEditMode) {
        handleEdit(taskId, taskText);
      } else {
        handleAddTask(taskText);
      }
      setTaskText("");
      onCancel();
    }
  };

  const title = isEditMode ? "Edit Task" : "+ New Task";
  const buttonText = isEditMode ? "Edit Task" : "+ New Task";

  return (
    <Modal isOpen={isOpenModal} onClose={onCancel}>
      <TaskCard>
        <Title>{title}</Title>
        <Input
          type="text"
          placeholder="Task Name"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <Button onClick={handleSubmit} disabled={!taskText}>
          {buttonText}
        </Button>
      </TaskCard>
    </Modal>
  );
};

export default TaskModal;
