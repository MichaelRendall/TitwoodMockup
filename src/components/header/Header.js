import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import DrawerToggle from "./DrawerToggle";
import SideDrawer from "../nav/SideDrawer";
import classes from "./Header.module.css";

const Header = () => {
  const [sideBarShowing, setSideBarShowing] = useState(false);

  const openSideBar = () => {
    setSideBarShowing(true);
  };

  const closeSideBar = () => {
    setSideBarShowing(false);
  };

  return (
    <header className={classes.header}>
      {sideBarShowing && <SideDrawer closeSideBar={closeSideBar} />}
      <DrawerToggle clicked={openSideBar} />
      <NavLink to="/">
        <img
          className={classes.logo}
          src={logo}
          alt="Titwood Tennis Club Logo"
        />
      </NavLink>
      <button className={classes.button}>Book a Court</button>
    </header>
  );
};

/*
 <nav className={classes.navItems}>
        <ul>
          <li>
            <NavLink to="/membership">Membership</NavLink>
          </li>
          <li>
            <NavLink to="/the-club">The Club</NavLink>
          </li>
          <li>
            <NavLink to="/news">News &amp; Events</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Get in Touch</NavLink>
          </li>
          <li>
            <NavLink to="/book-court">Book a Court</NavLink>
          </li>
        </ul>
      </nav>
*/

export default Header;
