import { Navigate } from "react-router-dom";

function Authenticated({ children }) {
  const Auth = localStorage.getItem("token");
  if (Auth) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default Authenticated;
