import React from "react";
import classes from "../toolbar/toolbar.module.css";
import Logo from "../../logo/logo";
import DrawerToggle from "../sideDrawer/drawerToggle/drawerToggle";
import Navigation from "../navigationItems/navigationItems";

const toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <Navigation />
      </nav>
    </header>
  );
};

export default toolbar;
