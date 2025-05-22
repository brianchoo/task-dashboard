import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Layout from "./layouts/layout";
import { AuthProvider } from "./context/authContext";
import { TaskProvider } from "./context/tasksContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
