import NoTask from "./NoTask";
import NewTask from "./NewTask";
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
  const { showNewTask, isOpenModal, handleAddNewTask, handleCancelNewTask } =
    useTaskModal();

  return (
    <TaskManagerContainer>
      {!showNewTask ? (
        <NoTask onAddTask={handleAddNewTask} />
      ) : (
        <NewTask isOpenModal={isOpenModal} onCancel={handleCancelNewTask} />
      )}
    </TaskManagerContainer>
  );
};

export default TaskManager;
