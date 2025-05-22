import { useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    console.log("its closed");
    setIsOpen(false);
  };

  return { isOpen, openModal, closeModal };
};
