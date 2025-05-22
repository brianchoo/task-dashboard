import styled from "styled-components";
import Card from "../Card/Card";
import DashboardTasksCards from "./DashboardCards/DashboardTasksCards";

const MainDashboardCardsContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 30px;
  }
`;

const MainDashboard = () => {
  return (
    <>
      <MainDashboardCardsContainer>
        <DashboardTasksCards />
      </MainDashboardCardsContainer>
    </>
  );
};

export default MainDashboard;
