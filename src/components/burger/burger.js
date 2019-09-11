import React from "react";
import classes from "./burger.module.css";
import BurgerIngeredient from "./burgerIngredient/burgerIngredient";

const burger = props => {
  //convert object ingredients into the iterable array containing JSX.
  let transformedIngredients = Object.keys(props.ingredients)
    .map(name => {
      return [...Array(props.ingredients[name])].map((_, i) => {
        return <BurgerIngeredient key={name + i} type={name} />;
      });
    })
    //To convert array of array into the array.
    .reduce((arr, element) => {
      return arr.concat(element);
    }, []);
  console.log(transformedIngredients.length);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add ingredients</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngeredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngeredient type="bread-bottom" />
    </div>
  );
};

export default burger;
