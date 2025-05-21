import { useEffect } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useAuth } from "../hooks/useAuth";

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
`;

const LoginCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 24px;
  width: 100%;
  max-width: 320px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #334155;
  margin-bottom: 24px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: none;
  border-radius: 6px;
  background-color: #f1f5f9;
  font-size: 16px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #60a5fa;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #4f7cff;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
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

const ErrorMessage = styled.div`
  color: #ef4444;
  margin-bottom: 16px;
  font-size: 14px;
`;

const WelcomeMessage = styled.div`
  margin-bottom: 16px;
  font-size: 16px;
  color: #334155;
`;

const Dashboard = () => {
  const { user } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
};

export default Dashboard;
