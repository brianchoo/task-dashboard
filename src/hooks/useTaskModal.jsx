import { useState } from "react";
import { useModal } from "./useModal";

export const useTaskModal = () => {
  const [showNewTask, setShowNewTask] = useState(false);
  const { isOpen, openModal, closeModal } = useModal();

  const handleAddNewTaskModal = () => {
    setShowNewTask(true);
    openModal();
  };

  const handleEditTaskModal = () => {
    openModal();
  };

  const handleCancelTaskModal = () => {
    setShowNewTask(false);
    closeModal();
  };

  return {
    showNewTask,
    isOpenModal: isOpen,
    handleAddNewTaskModal,
    handleEditTaskModal,
    handleCancelTaskModal,
  };
};
