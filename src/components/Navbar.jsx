import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div>
      <NavLink
        to="/new-tweet"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        New tweet{" "}
      </NavLink>
      <NavLink
        to="/tweets"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Tweets{" "}
      </NavLink>
      <NavLink
        to="/logout"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Logout
      </NavLink>
    </div>
  );
}

export default Navbar;
