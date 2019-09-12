import React from "react";
import Logo from "../../assest/images/burger-logo.png";
import classes from "../logo/logo.module.css";

const logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={Logo} alt={"burger-logo"}></img>
    </div>
  );
};

export default logo;
