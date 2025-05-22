import styled from "styled-components";
import Card from "../../Card/Card";

const Title = styled.div`
  font-size: 20px;
  color: #537178;
  margin-bottom: 12px;
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TaskItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  color: #8f9ea2;
  font-size: 14px;

  &::before {
    content: "•";
    color: #8f9ea2;
    margin-right: 8px;
    font-size: 28px;
    line-height: 0;
  }

  &.completed {
    text-decoration: line-through;
  }
`;

const TaskText = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
  min-width: 0;

  &.completed {
    text-decoration: line-through;
  }
`;

const LatestTasks = () => {
  return (
    <>
      <Card>
        <Title>Latest Created Tasks</Title>
        <TaskList>
          <TaskItem>
            <TaskText>Clean the room</TaskText>
          </TaskItem>
          <TaskItem>
            <TaskText>Buy some vegetables, chicken & ...</TaskText>
          </TaskItem>
          <TaskItem>
            <TaskText className="completed">Reinstall windows on PC</TaskText>
          </TaskItem>
        </TaskList>
      </Card>
    </>
  );
};

export default LatestTasks;
