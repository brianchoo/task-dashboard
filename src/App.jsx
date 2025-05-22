import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Layout from "./layouts/layout";
import { AuthProvider } from "./context/authContext";
import { TaskProvider } from "./context/tasksContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";

function App() {
  return (
    <>
      <AuthProvider>
        <TaskProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="*" element={<Navigate to="/login" replace />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TaskProvider>
      </AuthProvider>
    </>
  );
}

export default App;
