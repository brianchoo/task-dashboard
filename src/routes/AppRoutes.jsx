import { Routes, Route, Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Layout from "../layouts/layout";

const AppRoutes = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Navigate to={isLoggedIn ? "/dashboard" : "/login"} replace />
          }
        />
        {isLoggedIn && <Route path="/dashboard" element={<Dashboard />} />}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
