import NoTask from "./NoTask";
import NewTask from "./NewTask";
import styled from "styled-components";
import { useNewTaskModal } from "../../hooks/useNewTaskModal";

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
  const { showNewTask, isOpenModal, handleAddNewTask, handleCancelNewTask } =
    useNewTaskModal();

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
