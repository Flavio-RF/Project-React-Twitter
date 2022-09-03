import { Navigate } from "react-router-dom";

function RequiresAuth({ children }) {
  const isAuthenticated = localStorage.getItem("token");
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default RequiresAuth;
