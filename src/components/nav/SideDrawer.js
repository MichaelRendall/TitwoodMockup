import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import { NavLink } from "react-router-dom";

import classes from "./SideDrawer.module.scss";
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
          <div className={classes.SideDrawer__TopSection}>
            <div className={classes.logo}>
              <NavLink to="/" onClick={props.closeSideBar}>
                <img src={logo} alt="Titwood Tennis Club Logo" />
              </NavLink>
            </div>
            {/* <hr /> */}
          </div>
          <Navigation clicked={props.closeSideBar} />
        </div>
      </CSSTransition>
    </React.Fragment>
  );
};

export default SideDrawer;
