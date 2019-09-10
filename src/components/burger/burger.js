import React from "react";
import classes from "./burger.module.css";
import BurgerIngeredient from "./burgerIngredient/burgerIngredient";

const burger = props => {
  //convert object ingredients into the iterable array containing JSX.
  let tansformedIngredients = Object.keys(props.ingredients).map(name => {
    return [...Array(props.ingredients[name])].map((_, i) => {
      return <BurgerIngeredient key={name + i} type={name} />;
    });
  });

  return (
    <div className={classes.Burger}>
      <BurgerIngeredient type="bread-top" />
      {tansformedIngredients}
      <BurgerIngeredient type="bread-bottom" />
    </div>
  );
};

export default burger;
