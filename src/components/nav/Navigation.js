import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.scss";

const Navigation = (props) => {
  return (
    <nav className={classes.navItems}>
      <ul>
        <li>
          <NavLink
            to="/"
            activeClassName={classes.active}
            onClick={props.clicked}
            exact
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/membership"
            activeClassName={classes.active}
            onClick={props.clicked}
          >
            Membership
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/the-club"
            activeClassName={classes.active}
            onClick={props.clicked}
          >
            The Club
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            activeClassName={classes.active}
            onClick={props.clicked}
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/news"
            activeClassName={classes.active}
            onClick={props.clicked}
          >
            News &amp; Events
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            activeClassName={classes.active}
            onClick={props.clicked}
          >
            Get in Touch
          </NavLink>
        </li>
        <li>
          <button className={classes.button}>Book a Court</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
