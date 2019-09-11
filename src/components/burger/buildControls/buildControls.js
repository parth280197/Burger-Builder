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
    </div>
  );
};

export default buildControls;
