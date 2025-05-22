import styled from "styled-components";

const NoTaskCard = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  background: #ffffff;
  padding: 24px;
  width: 100%;
  box-shadow: 0px 3px 6px #00000029;
  height: 160px;
  margin-top: 20px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    margin: 0 auto;
    max-width: 300px;
    border-radius: 12px;
  }
`;

const NoTaskCardInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`;

const Title = styled.div`
  font-size: 20px;
  color: #537178;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const Button = styled.button`
  width: 124px;
  margin: 0 auto;
  padding: 12px;
  background-color: #5285ec;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #3b67e6;
  }

  &:disabled {
    background-color: #93c5fd;
    cursor: not-allowed;
  }
`;

const NoTask = ({ onAddTask }) => {
  return (
    <NoTaskCard>
      <NoTaskCardInner>
        <Title>You have no task.</Title>
        <Button onClick={onAddTask}>+ Add Task</Button>
      </NoTaskCardInner>
    </NoTaskCard>
  );
};

export default NoTask;
