import classes from "./MainNavigation.module.css";
import { NavLink, Outlet, useNavigation } from "react-router-dom";

function MainNavigation() {
  const navigation = useNavigation();
  return (
    <>
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? classes.active : undefined)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/events" className={({ isActive }) => (isActive ? classes.active : undefined)}>
                Events
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      {navigation.state === "loading" && <p>Loading...</p>}
      <Outlet />
    </>
  );
}

export default MainNavigation;
