import { useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const BackdropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000033;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 40;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 210px;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 3px 6px #00000029;
  padding: 24px;
  width: 90%;
  z-index: 50;

  @media (min-width: 768px) {
    top: 50%;
    max-width: 300px;
  }
`;

const Backdrop = ({ onClick }) => {
  return <BackdropContainer onClick={onClick} />;
};

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscapeKey = (e) => {
      console.log("pressed");
      if (e.keyCode === 27 && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => window.removeEventListener("keydown", handleEscapeKey);
  }, [isOpen, onClose]);

  // Prevent Modal from being rendered to the DOM if isOpen is false
  if (!isOpen) return null;

  return createPortal(
    <>
      <Backdrop onClick={onClose} />
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContainer>
    </>,
    document.body
  );
};

export default Modal;
