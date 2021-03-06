import React from "react";
import BuildControl from "../buildControls/buildControl";
import classes from "./buildControls.module.css";
const controls = [
  {label: "Bacon", type: "bacon"},
  {label: "Meat", type: "meat"},
  {label: "Cheese", type: "cheese"},
  {label: "Salad", type: "salad"}
];
const buildControls = props => {
  return (
    <div className={classes.BuildControls}>
      <p style={{margin: "2px 0px"}}>
        Current burger price:
        <strong>{props.price.toFixed(2)} $</strong>
      </p>
      {controls.map(ctrl => {
        return (
          <BuildControl
            label={ctrl.label}
            key={ctrl.label}
            addIngredient={() => props.addIngredient(ctrl.type)}
            removeIngredient={() => props.removeIngredient(ctrl.type)}
            disableMore={props.disable.more[ctrl.type]}
            disableLess={props.disable.less[ctrl.type]}
          />
        );
      })}
      <button
        className={classes.OrderButton}
        disabled={!props.isPurchaseAble}
        onClick={props.purchaseHandler}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
