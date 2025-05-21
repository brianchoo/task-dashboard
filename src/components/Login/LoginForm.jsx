import { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../../hooks/useAuth";
import LoadingSpinner from "../LodingSpinner";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f9fa;
  width: 100%;
`;

const LoginCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  width: 100%;
  max-width: 300px;
  box-shadow: 0px 3px 6px #00000029;
`;

const Title = styled.div`
  font-size: 20px;
  color: #537178;
  margin-bottom: 24px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: none;
  border-radius: 8px;
  background-color: #eef1f8;
  color: #7a7d7e;
  font-size: 16px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #5285ec;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #5285ec;
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

const LoginForm = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const { login, loading, error } = useAuth();

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    login(id, name);
  };

  return (
    <LoginContainer>
      <LoginCard>
        <Title>Login</Title>
        <form>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Input
            type="text"
            placeholder="Id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            disabled={loading}
          />
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
          />
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? <LoadingSpinner /> : "Login"}
          </Button>
        </form>
      </LoginCard>
    </LoginContainer>
  );
};

export default LoginForm;
