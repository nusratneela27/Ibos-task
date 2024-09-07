import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logOut = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const signup = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const userInfo = {
    user,
    loading,
    login,
    signup,
    logOut,
  };

  return (
    <AuthContext.Provider value={{ userInfo }}>{children}</AuthContext.Provider>
  );
};
