import { useState } from "react";
import { useModal } from "./useModal";

export const useNewTaskModal = () => {
  const [showNewTask, setShowNewTask] = useState(false);
  const { isOpen, openModal, closeModal } = useModal();

  const handleAddNewTask = () => {
    setShowNewTask(true);
    openModal();
  };

  const handleEditTaskModal = () => {
    openModal();
  };

  const handleCancelNewTask = () => {
    setShowNewTask(false);
    closeModal();
  };

  return {
    showNewTask,
    isOpenModal: isOpen,
    handleAddNewTask,
    handleEditTaskModal,
    handleCancelNewTask,
  };
};
