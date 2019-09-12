import React from "react";
import Button from "../../UI/button/button";

const orderSummary = props => {
  const price = props.price;
  const ingredientsList = Object.keys(props.ingredients).map(name => {
    return (
      <li key={name}>
        {name}:- {props.ingredients[name]}
      </li>
    );
  });

  return (
    <div>
      <h3>Order summary</h3>
      <p>Your order contains:- </p>
      <ul>{ingredientsList}</ul>
      <p>price:- {price.toFixed(2)}</p>
      <Button btnType={"Danger"} onClick={props.purchaseHandler}>
        Cancel
      </Button>
      <Button btnType={"Success"}>Continue</Button>
    </div>
  );
};

export default orderSummary;
