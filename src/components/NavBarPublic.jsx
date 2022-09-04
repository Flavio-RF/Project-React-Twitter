import { NavLink } from "react-router-dom";

function NavbarPublic() {
  return (
    <div>
      <NavLink
        to="/signup"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Signup{" "}
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Login{" "}
      </NavLink>
    </div>
  );
}

export default NavbarPublic;
