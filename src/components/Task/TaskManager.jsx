import { useState } from "react";
import NoTask from "./NoTask";
import NewTask from "./NewTask";
import { useModal } from "../../hooks/useModal";
import styled from "styled-components";

const TaskManagerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1024px) {
    width: 300px;
    margin: 0 auto;
    min-height: calc(100vh - 144px);
    flex-direction: row;
  }
`;

const TaskManager = () => {
  const [showNewTask, setShowNewTask] = useState(false);
  const { isOpen, openModal, closeModal } = useModal();

  const handleAddNewTask = () => {
    setShowNewTask(true);
    openModal();
  };

  const handleCancelNewTask = () => {
    setShowNewTask(false);
    closeModal();
  };

  return (
    <TaskManagerContainer>
      {!showNewTask ? (
        <NoTask onAddTask={handleAddNewTask} />
      ) : (
        <NewTask isOpenModal={isOpen} onCancel={handleCancelNewTask} />
      )}
    </TaskManagerContainer>
  );
};

export default TaskManager;
