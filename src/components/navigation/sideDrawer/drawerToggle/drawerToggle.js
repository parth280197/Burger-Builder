import React from "react";
import classes from "../drawerToggle/drawerToggle.module.css";
const drawerToggle = props => {
  return (
    <div className={classes.isVisible} onClick={props.clicked}>
      Menu
    </div>
  );
};

export default drawerToggle;
