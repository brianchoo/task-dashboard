import { useState } from "react";
import NoTask from "./NoTask";
import NewTask from "./NewTask";
import { useModal } from "../../hooks/useModal";

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
    <>
      {!showNewTask ? (
        <NoTask onAddTask={handleAddNewTask} />
      ) : (
        <NewTask isOpenModal={isOpen} onCancel={handleCancelNewTask} />
      )}
    </>
  );
};

export default TaskManager;
