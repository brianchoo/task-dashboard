import styled from "styled-components";
import DashboardTasksCards from "./DashboardCards/DashboardTasksCards";
import DashboardTasksList from "./DashboardTasks/DashboardTasksList";
import { BREAKPOINT } from "../../constants/breakpoints";

const MainDashboardCardsContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  @media (min-width: ${BREAKPOINT.MD}) {
    flex-direction: row;
    gap: 30px;
  }
`;

const MainDashboardTasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media (min-width: ${BREAKPOINT.MD}) {
    margin-top: 40px;
  }
`;

const MainDashboard = () => {
  return (
    <>
      <MainDashboardCardsContainer>
        <DashboardTasksCards />
      </MainDashboardCardsContainer>
      <MainDashboardTasksContainer>
        <DashboardTasksList />
      </MainDashboardTasksContainer>
    </>
  );
};

export default MainDashboard;
