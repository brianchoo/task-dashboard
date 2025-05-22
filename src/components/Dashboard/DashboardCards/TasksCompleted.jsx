import styled from "styled-components";
import Card from "../../Card/Card";

const Title = styled.div`
  font-size: 20px;
  color: #537178;
  margin-bottom: 12px;
`;

const FractionContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

const Numerator = styled.span`
  font-size: 64px;
  color: #4285f4;
  font-weight: normal;
  position: relative;
  top: -5px;
`;

const Denominator = styled.span`
  font-size: 20px;
  color: #80868b;
`;

const TaskCompleted = () => {
  return (
    <>
      <Card>
        <Title>Task Completed</Title>
        <FractionContainer>
          <Numerator>5</Numerator>
          <Denominator>/20</Denominator>
        </FractionContainer>
      </Card>
    </>
  );
};

export default TaskCompleted;
