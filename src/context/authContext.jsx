import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedStatus = sessionStorage.getItem("isLoggedIn");
    if (storedStatus === "true") {
      setIsLoggedIn(true);
    }
    setLoading(false);
  }, []);

  const login = async (id, name) => {
    setLoading(true);
    setError(null);

    try {
      // await new Promise((resolve) => setTimeout(resolve, 1000));

      if (!id.trim() || !name.trim()) {
        throw new Error("ID and Name are required");
      }

      setUser({ id, name });
      sessionStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  console.log(user, "user");

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    sessionStorage.removeItem("isLoggedIn");
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, loading, error, isLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};
