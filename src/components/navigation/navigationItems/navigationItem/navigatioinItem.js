import React from "react";
import classes from "../navigationItem/navigationItem.module.css";
const navigatioinItem = props => {
  return (
    <li className={classes.NavigationItem}>
      <a href={props.link} className={props.active && classes.active}>
        {props.children}
      </a>
    </li>
  );
};

export default navigatioinItem;
