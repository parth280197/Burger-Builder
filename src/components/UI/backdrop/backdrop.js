import React from "react";
import classes from "../backdrop/backdrop.module.css";

const backdrop = props => {
  return props.show ? (
    <div className={classes.Backdrop} onClick={props.closed}></div>
  ) : null;
};

export default backdrop;
