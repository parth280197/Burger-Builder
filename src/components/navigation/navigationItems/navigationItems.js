import React from "react";
import classes from "../navigationItems/navigationItems.module.css";
import NavigationItem from "../navigationItems/navigationItem/navigatioinItem";

const navigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" active>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
  );
};

export default navigationItems;
