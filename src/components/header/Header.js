import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logoLarge.png";
import DrawerToggle from "./DrawerToggle";
import SideDrawer from "../nav/SideDrawer";
import Backdrop from "../UI/Backdrop";
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
      {sideBarShowing && <Backdrop clicked={closeSideBar} />}
      <SideDrawer closeSideBar={closeSideBar} open={sideBarShowing} />

      <div>
        <DrawerToggle clicked={openSideBar} />
      </div>

      <div>
        <div className={classes.logo}>
          <NavLink to="/">
            <img src={logo} alt="Titwood Tennis Club Logo" />
          </NavLink>
        </div>
      </div>

      <div className={classes.bookBtn}>
        <button className={classes.button}>Book a Court</button>
      </div>
    </header>
  );
};

export default Header;
