import styled from "styled-components";
import SearchMagnifyingGlass from "../../../assets/svg/search-solid.svg";
import { useTaskModal } from "../../../hooks/useTaskModal";
import NewTask from "../../Task/NewTask";
import { BREAKPOINT } from "../../../constants/breakpoints";

const TopBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 16px;

  @media (min-width: ${BREAKPOINT.MD}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
  }
`;

const TaskHeading = styled.div`
  font-size: 20px;
  color: var(--color-dark-green);
  margin-bottom: 16px;

  @media (min-width: ${BREAKPOINT.MD}) {
    margin-bottom: 0;
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;

  @media (min-width: ${BREAKPOINT.MD}) {
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
  color: var(--color-dark-grey);
  outline: none;
  width: 100%;
  background: #d9dfeb 0% 0% no-repeat padding-box;
  padding-left: 40px;

  &::placeholder {
    color: var(--color-dark-grey);
  }

  &:focus {
    border-color: var(--color-blue);
  }

  @media (min-width: ${BREAKPOINT.MD}) {
    width: 244px;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: var(--color-blue);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;

  @media (min-width: ${BREAKPOINT.MD}) {
    width: 124px;
  }

  &:hover {
    background-color: #3b67e6;
  }
`;

function TaskTopBar({ searchTerm, handleSearchChange }) {
  const { isOpenModal, handleAddNewTaskModal, handleCancelTaskModal } =
    useTaskModal();

  return (
    <TopBarContainer>
      <TaskHeading>Tasks</TaskHeading>
      <ActionsContainer>
        <SearchInputContainer>
          <MagnifyingGlassImage src={SearchMagnifyingGlass} alt="Search Icon" />
          <SearchInput
            type="text"
            placeholder="Search by task name"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </SearchInputContainer>
        <Button onClick={handleAddNewTaskModal}>+ New Task</Button>
      </ActionsContainer>
      <NewTask isOpenModal={isOpenModal} onCancel={handleCancelTaskModal} />
    </TopBarContainer>
  );
}

export default TaskTopBar;
