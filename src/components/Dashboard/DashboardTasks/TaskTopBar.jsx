import styled from "styled-components";
import SearchMagnifyingGlass from "../../../assets/svg/search-solid.svg";
import { useNewTaskModal } from "../../../hooks/useNewTaskModal";
import NewTask from "../../Task/NewTask";

const breakpoints = {
  mobile: "768px",
};

const TopBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 16px;

  @media (min-width: ${breakpoints.mobile}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
  }
`;

const TaskHeading = styled.div`
  font-size: 20px;
  color: #537178;
  margin-bottom: 16px;

  @media (min-width: ${breakpoints.mobile}) {
    margin-bottom: 0;
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;

  @media (min-width: ${breakpoints.mobile}) {
    flex-direction: row;
    width: unset;
    gap: 12px;
  }
`;

const SearchInputContainer = styled.div`
  position: relative;
`;

const MagnifyingGlassImage = styled.img`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
`;

const SearchInput = styled.input`
  padding: 10px 16px;
  border: 1px solid #d9dfeb;
  border-radius: 8px;
  font-size: 14px;
  color: #7a7d7e;
  outline: none;
  width: 100%;
  background: #d9dfeb 0% 0% no-repeat padding-box;
  padding-left: 40px;

  &::placeholder {
    color: #7a7d7e;
  }

  &:focus {
    border-color: #5285ec;
  }

  @media (min-width: ${breakpoints.mobile}) {
    width: 244px;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #5285ec;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;

  @media (min-width: ${breakpoints.mobile}) {
    width: 124px;
  }

  &:hover {
    background-color: #3b67e6;
  }
`;

function TaskTopBar() {
  const { isOpenModal, handleAddNewTask, handleCancelNewTask } =
    useNewTaskModal();
  return (
    <TopBarContainer>
      <TaskHeading>Tasks</TaskHeading>
      <ActionsContainer>
        <SearchInputContainer>
          <MagnifyingGlassImage src={SearchMagnifyingGlass} alt="Search Icon" />
          <SearchInput type="text" placeholder="Search by task name" />
        </SearchInputContainer>
        <Button onClick={handleAddNewTask}>+ New Task</Button>
      </ActionsContainer>
      <NewTask isOpenModal={isOpenModal} onCancel={handleCancelNewTask} />
    </TopBarContainer>
  );
}

export default TaskTopBar;
