import { Routes, Route, Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Layout from "../layouts/Layout";

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
      <Route
        path="*"
        element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} replace />}
      />
    </Routes>
  );
};

export default AppRoutes;
