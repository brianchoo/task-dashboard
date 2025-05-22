import styled from "styled-components";

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
  return (
    <TopBarContainer>
      <TaskHeading>Tasks</TaskHeading>
      <ActionsContainer>
        <SearchInput type="text" placeholder="Search by task name" />
        <Button>+ New Task</Button>
      </ActionsContainer>
    </TopBarContainer>
  );
}

export default TaskTopBar;
