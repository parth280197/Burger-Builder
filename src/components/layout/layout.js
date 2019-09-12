import React from "react";
import classes from "./Layout.module.css";
import Toolbar from "../navigation/toolbar/toolbar";
const layout = props => (
  <>
    <Toolbar />
    <main className={classes.Content}>{props.children}</main>
  </>
);

export default layout;
