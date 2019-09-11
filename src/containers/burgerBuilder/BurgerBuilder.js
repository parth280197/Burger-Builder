import React, {Component} from "react";
import Burger from "./../../components/burger/burger";
import BuildControls from "../../components/burger/buildControls/buildControls";

const INGREDIENT_PRICE = {
  salad: 0.5,
  meat: 0.2,
  cheese: 0.4,
  bacon: 0.5
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0
    },
    totalPrice: 4
  };

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = newCount;
    const oldPrice = this.state.totalPrice;
    const priceToAdd = INGREDIENT_PRICE[type];
    const newPrice = oldPrice + priceToAdd;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount !== 0) {
      const newCount = oldCount - 1;
      const updatedIngredients = {
        ...this.state.ingredients
      };
      updatedIngredients[type] = newCount;
      const oldPrice = this.state.totalPrice;
      const priceToDeduct = INGREDIENT_PRICE[type];
      const newPrice = oldPrice - priceToDeduct;
      this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    }
  };

  render() {
    const disableInfo = {
      less: {...this.state.ingredients},
      more: {...this.state.ingredients}
    };
    for (let key in disableInfo.more) {
      disableInfo.less[key] = this.state.ingredients[key] <= 0;
      disableInfo.more[key] = this.state.ingredients[key] >= 3;
    }
    console.log(disableInfo);
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disable={disableInfo}
        />
      </>
    );
  }
}
export default BurgerBuilder;
