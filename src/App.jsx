import GlobalStyles from "./styles/GlobalStyles";
import { AuthProvider } from "./context/authContext";
import { TaskProvider } from "./context/tasksContext";
import { BrowserRouter } from "react-router";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <GlobalStyles />
          <AppRoutes />
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
