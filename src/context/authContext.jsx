import { createContext, useState, useEffect } from "react";
import { saveUserSession, clearUserSession } from "../utils/sessionStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedStatus = sessionStorage.getItem("isLoggedIn");
    const storedUserName = sessionStorage.getItem("userName");
    const storedUserId = sessionStorage.getItem("userId");
    if (storedStatus === "true") {
      setIsLoggedIn(true);
      if (storedUserName && storedUserId) {
        setUser({ id: storedUserId, name: storedUserName });
      } else {
        setUser({ name: storedUserName });
      }
    }
    setLoading(false);
  }, []);

  const login = async (id, name) => {
    setLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (!id.trim() || !name.trim()) {
        throw new Error("ID and Name are required");
      }

      setUser({ id, name });
      saveUserSession(id, name);
      setIsLoggedIn(true);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    clearUserSession();
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, loading, error, isLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};
