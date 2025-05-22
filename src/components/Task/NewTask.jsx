import { useState, useContext } from "react";
import styled from "styled-components";
import Modal from "../Modal/Modal";
import { TasksContext } from "../../context/tasksContext";

const NewTaskCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width: 100%;
`;

const Title = styled.div`
  font-size: 20px;
  color: #537178;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const Button = styled.button`
  width: 100%;
  margin: 0 auto;
  padding: 12px;
  background-color: #5285ec;
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
  background-color: #eef1f8;
  color: #7a7d7e;
  font-size: 14px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #5285ec;
  }
`;

const NewTask = ({ isOpenModal, onCancel }) => {
  const [taskText, setTaskText] = useState("");
  const { handleAddTask } = useContext(TasksContext);

  const handleSubmitTask = () => {
    if (taskText.trim() !== "") {
      handleAddTask(taskText);
      setTaskText("");
      onCancel();
    }
  };
  return (
    <Modal isOpen={isOpenModal} onClose={onCancel}>
      <NewTaskCard>
        <Title>+ New Task</Title>
        <Input
          type="text"
          placeholder="Task Name"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <Button onClick={handleSubmitTask} disabled={!taskText}>
          + New Task
        </Button>
      </NewTaskCard>
    </Modal>
  );
};

export default NewTask;
