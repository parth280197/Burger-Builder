import React from "react";
import classes from "../toolbar/toolbar.module.css";
import Logo from "../../logo/logo";
import Navigation from "../navigationItems/navigationItems";

const toolbar = () => {
  return (
    <header className={classes.Toolbar}>
      <div>Menu</div>
      <Logo />
      <Navigation />
    </header>
  );
};

export default toolbar;
