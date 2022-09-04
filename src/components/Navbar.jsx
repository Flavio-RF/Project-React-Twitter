import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className=" flex justify-between p-3">
      <NavLink
        to="/tweets"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Tweets{" "}
      </NavLink>
      <NavLink
        to="/new-tweet"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        New tweet{" "}
      </NavLink>
      <NavLink
        to="/logout"
        className={({ isActive }) =>
          isActive
            ? "active bg-red-600 px-2 py-1 rounded-sm text-sm "
            : "bg-red-600 px-2 py-1 rounded-sm text-sm"
        }
      >
        Logout
      </NavLink>
    </div>
  );
}

export default Navbar;
