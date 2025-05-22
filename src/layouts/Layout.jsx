import { Outlet } from "react-router";
import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";

const LayoutContainer = styled.div`
  min-height: 100vh;
  background: #f4f4f6;
`;

const Layout = () => {
  return (
    <LayoutContainer>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </LayoutContainer>
  );
};

export default Layout;
