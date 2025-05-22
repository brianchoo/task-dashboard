import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import styled from "styled-components";
import UserImage from "../../assets/images/guy.png";
import { BREAKPOINT } from "../../constants/breakpoints";

const Nav = styled.nav`
  background-color: #ffffff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  height: 72px;
  padding: 12px 24px;

  @media (min-width: ${BREAKPOINT.MD}) {
    padding: 0;
  }
`;

const NavInner = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.5rem;
  width: 960px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 12px;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Username = styled.span`
  color: #6d8187;
  font-size: 16px;

  @media (min-width: ${BREAKPOINT.MD}) {
    font-size: 19px;
  }
`;

const LogoutButton = styled.button`
  color: #6d8187;
  outline: none;
  border: none;
  background: none;
  font-size: 16px;
  cursor: pointer;

  @media (min-width: ${BREAKPOINT.MD}) {
    font-size: 19px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Nav>
      <NavInner>
        <UserInfo>
          <Avatar>
            <AvatarImage src={UserImage} alt="User" />
          </Avatar>
          <Username>{user?.name || "Guest"}</Username>
        </UserInfo>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </NavInner>
    </Nav>
  );
};

export default Navbar;
