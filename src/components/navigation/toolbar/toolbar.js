import React from "react";
import classes from "../toolbar/toolbar.module.css";
import Logo from "../../logo/logo";

const toolbar = () => {
  return (
    <header className={classes.Toolbar}>
      <div>Menu</div>
      <Logo />
      <nav>...</nav>
    </header>
  );
};

export default toolbar;
