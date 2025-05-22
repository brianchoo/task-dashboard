import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import LoginForm from "../components/Login/LoginForm";

const Login = () => {
  const { user, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user || isLoggedIn) {
      navigate("/dashboard");
    }
  }, [user, isLoggedIn, navigate]);

  return <LoginForm />;
};

export default Login;
