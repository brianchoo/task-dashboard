import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import LoginForm from "../components/Login/LoginForm";

const Login = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      console.log("login navigate");
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return <LoginForm />;
};

export default Login;
