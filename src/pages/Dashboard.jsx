import { useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useAuth } from "../hooks/useAuth";
import TaskManager from "../components/Task/TaskManager";
import { TasksContext } from "../context/tasksContext";
import MainDashboard from "../components/Dashboard/MainDashboard";
import { BREAKPOINT } from "../constants/breakpoints";

const DashboardContainer = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  @media (min-width: ${BREAKPOINT.MD}) {
    max-width: 960px;
    margin: 30px auto 0;
    min-height: calc(100vh - 72px);
  }
`;

const Dashboard = () => {
  const { user, isLoggedIn } = useAuth();
  const { tasks } = useContext(TasksContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !isLoggedIn) {
      navigate("/login");
    }
  }, [user, isLoggedIn, navigate]);

  return (
    <DashboardContainer>
      {tasks?.length > 0 ? <MainDashboard /> : <TaskManager />}
    </DashboardContainer>
  );
};

export default Dashboard;
