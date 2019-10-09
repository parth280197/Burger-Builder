import React from "react";
import Burger from "../../burger/burger";
import Button from "../../UI/button/button";
import classes from "./CheckoutSummary.module.css";

const CheckoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>My spicy burger</h1>
      <div style={{width: "100%", margin: "auto"}}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" onClick={props.checkOutCancel}>
        Cancel
      </Button>
      <Button btnType="Success" onClick={props.checkOutContinue}>
        Continue
      </Button>
    </div>
  );
};

export default CheckoutSummary;
