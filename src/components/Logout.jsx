import { Navigate } from "react-router-dom";

function Logout() {
  localStorage.clear();

  return <Navigate to="/login" replace />;
}

export default Logout;
