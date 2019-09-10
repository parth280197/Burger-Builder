import React from "react";
import PropType from "prop-types";
import classes from "./burgerIngredient.module.css";

const burgerIngredient = props => {
  let ingredient = null;

  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className={classes.BreadBottom}></div>;
      break;
    case "bread-top":
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;
    case "meat":
      ingredient = <div className={classes.Meat}></div>;
      break;
    case "cheese":
      ingredient = <div className={classes.Cheese}></div>;
      break;
    case "bacon":
      ingredient = <div className={classes.Bacon}></div>;
      break;
    case "salad":
      ingredient = <div className={classes.Salad}></div>;
      break;
    default:
      ingredient = null;
  }
  return ingredient;
};

//proptype validation type should be required and it must be string
burgerIngredient.prototype = {
  type: PropType.string.isRequired
};

export default burgerIngredient;
