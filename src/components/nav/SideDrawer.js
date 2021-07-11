import classes from "./SideDrawer.module.css";
import Backdrop from "../UI/Backdrop";
import React from "react";
import logo from "../../assets/logo.png";
import Navigation from "./Navigation";

const SideDrawer = (props) => {
  return (
    <React.Fragment>
      <Backdrop clicked={props.closeSideBar} />
      <div className={classes.SideDrawer}>
        <img
          className={classes.logo}
          src={logo}
          alt="Titwood Tennis Club Logo"
        />
        <Navigation clicked={props.closeSideBar} />
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;
