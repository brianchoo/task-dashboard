import NoTask from "./NoTask";
import TaskModal from "./TaskModal";
import styled from "styled-components";
import { useTaskModal } from "../../hooks/useTaskModal";
import { BREAKPOINT } from "../../constants/breakpoints";

const TaskManagerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${BREAKPOINT.MD}) {
    width: 300px;
    margin: 0 auto;
    min-height: calc(100vh - 144px);
    flex-direction: row;
  }
`;

const TaskManager = () => {
  const {
    showNewTask,
    isOpenModal,
    handleAddNewTaskModal,
    handleCancelTaskModal,
  } = useTaskModal();

  return (
    <TaskManagerContainer>
      {!showNewTask ? (
        <NoTask onAddTask={handleAddNewTaskModal} />
      ) : (
        <TaskModal
          mode="add"
          isOpenModal={isOpenModal}
          onCancel={handleCancelTaskModal}
        />
      )}
    </TaskManagerContainer>
  );
};

export default TaskManager;
