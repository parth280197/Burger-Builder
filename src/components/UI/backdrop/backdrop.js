import React from "react";
import classes from "../backdrop/backdrop.module.css";

const backdrop = props =>
  props.show && <div className={classes.Backdrop} onClick={props.closed}></div>;

export default backdrop;
