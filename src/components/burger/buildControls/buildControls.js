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
        return <BuildControl label={ctrl.label} key={ctrl.label} />;
      })}
    </div>
  );
};

export default buildControls;
