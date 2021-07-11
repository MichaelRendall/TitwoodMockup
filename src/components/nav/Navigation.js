import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={classes.navItems}>
      <ul>
        <li>
          <NavLink to="/membership" onClick={props.clicked}>
            Membership
          </NavLink>
        </li>
        <li>
          <NavLink to="/the-club" onClick={props.clicked}>
            The Club
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" onClick={props.clicked}>
            News &amp; Events
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={props.clicked}>
            Get in Touch
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
