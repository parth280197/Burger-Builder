import React, {Component} from "react";
import Burger from "./../../components/burger/burger";
import BuildControls from "../../components/burger/buildControls/buildControls";
import Modal from "../../components/UI/modal/modal";
import OrderSummary from "../../components/burger/order/orderSummary";

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
    totalPrice: 4,
    isPurchaseAble: false,
    purchasing: false
  };

  purchaseHandler = () => {
    this.setState({purchasing: !this.state.purchasing});
  };

  updateOrderButton = ingredients => {
    let sum = Object.keys(ingredients)
      .map(type => {
        return ingredients[type];
      })
      .reduce((total, el) => {
        return (total += el);
      }, 0);
    this.setState({isPurchaseAble: sum > 0});
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
    this.updateOrderButton(updatedIngredients);
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
      this.updateOrderButton(updatedIngredients);
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
    return (
      <>
        <Modal
          visible={this.state.purchasing}
          purchaseHandler={this.purchaseHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disable={disableInfo}
          price={this.state.totalPrice}
          isPurchaseAble={this.state.isPurchaseAble}
          purchaseHandler={this.purchaseHandler}
        />
      </>
    );
  }
}
export default BurgerBuilder;
