import React from "react";
import classes from "../buildControls/buildControl.module.css";

const buildControl = props => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        className={classes.Less}
        onClick={props.removeIngredient}
        disabled={props.disableLess}
      >
        Less
      </button>
      <button
        className={classes.More}
        onClick={props.addIngredient}
        disabled={props.disableMore}
      >
        More
      </button>
    </div>
  );
};

export default buildControl;
