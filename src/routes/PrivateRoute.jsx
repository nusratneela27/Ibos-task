import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../components/context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { userInfo } = useContext(AuthContext);
  const { user, loading } = userInfo;

  if (loading) return <p>Loading...</p>;

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
