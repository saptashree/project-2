import { NavLink } from "react-router-dom";
import classes from "./MainNav.module.css";
import { Nav, NavItem, NavLink } from "reactstrap";

const MainNav = () => {
  return (
    <header>
      <div>
        <nav className={classes.nav}>
          <ul className={classes.ul}>
            <li>
              <NavLink activeclassName={classes.active} to="/">
                {" "}
                Home 1
              </NavLink>
            </li>
            <li>
              <NavLink activeclassName={classes.active} to="/about">
                {" "}
                About{" "}
              </NavLink>
            </li>
            <li>
              <NavLink activeclassName={classes.active} to="/products">
                {" "}
                Products{" "}
              </NavLink>
            </li>
            <li>
              <NavLink activeclassName={classes.active} to="/contact">
                {" "}
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default MainNav;
