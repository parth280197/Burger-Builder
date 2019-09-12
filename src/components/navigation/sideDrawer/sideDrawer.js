import React from "react";
import Navigation from "../navigationItems/navigationItems";
import Logo from "../../logo/logo";
import classes from "../sideDrawer/sideDrawer.module.css";
import Backdrop from "../../UI/backdrop/backdrop";

const sideDrawer = props => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.isOpen) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <>
      <Backdrop show={props.isOpen} closed={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <Navigation />
        </nav>
      </div>
    </>
  );
};

export default sideDrawer;
