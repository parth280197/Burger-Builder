import React from "react";

const orderSummary = props => {
  const price = props.price;
  const ingredientsList = Object.keys(props.ingredients).map(name => {
    return (
      <li>
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
    </div>
  );
};

export default orderSummary;
