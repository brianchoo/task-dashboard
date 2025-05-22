import styled from "styled-components";
import Card from "../../Card/Card";

const Title = styled.div`
  font-size: 20px;
  color: #537178;
  margin-bottom: 12px;
`;

const TasksChart = () => {
  return (
    <>
      <Card>
        <Title>Tasks Chart</Title>
      </Card>
    </>
  );
};

export default TasksChart;
