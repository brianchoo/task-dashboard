import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router";
import styled from "styled-components";
import { useAuth } from "../hooks/useAuth";
import Navbar from "../components/Navbar/Navbar";

const LayoutContainer = styled.div`
  min-height: 100vh;
`;

const Layout = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <LayoutContainer>
      {user && <Navbar />}
      <main>
        <Outlet />
      </main>
    </LayoutContainer>
  );
};

export default Layout;
