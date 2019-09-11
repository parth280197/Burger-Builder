import React from "react";
import classes from "../modal/modal.module.css";

const modal = props => {
  return <div className={classes.Modal}>{props.children}</div>;
};

export default modal;
