import React from "react";
import classes from "../buildControls/buildControl.module.css";

const buildControl = props => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button className={classes.More}>More</button>
      <button className={classes.Less}>Less</button>
    </div>
  );
};

export default buildControl;
