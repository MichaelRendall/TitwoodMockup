import CSSTransition from "react-transition-group/CSSTransition";

import classes from "./SideDrawer.module.css";
import React from "react";
import logo from "../../assets/logoLarge.png";
import Navigation from "./Navigation";

const animationTiming = {
  enter: 400,
  exit: 400,
};

const SideDrawer = (props) => {
  return (
    <React.Fragment>
      <CSSTransition
        in={props.open}
        timeout={animationTiming}
        mountOnEnter
        unmountOnExit
        classNames={{ enterActive: classes.Open, exitActive: classes.Close }}
      >
        <div className={classes.SideDrawer}>
          <img
            className={classes.logo}
            src={logo}
            alt="Titwood Tennis Club Logo"
          />
          <hr />
          <Navigation clicked={props.closeSideBar} />
        </div>
      </CSSTransition>
    </React.Fragment>
  );
};

export default SideDrawer;
