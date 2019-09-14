import React, {Component} from "react";
import Burger from "./../../components/burger/burger";
import BuildControls from "../../components/burger/buildControls/buildControls";
import Modal from "../../components/UI/modal/modal";
import OrderSummary from "../../components/burger/order/orderSummary";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICE = {
  salad: 0.5,
  meat: 0.2,
  cheese: 0.4,
  bacon: 0.5
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    isPurchaseAble: false,
    purchasing: false
  };

  //open and close the modal by using purchasing state
  purchaseHandler = () => {
    this.setState({purchasing: !this.state.purchasing});
  };

  //create order when user click on contniue in Order Summary model
  purchaseContinueHandler = () => {
    console.log("Purchase conntinue invoked");
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Parth Patel",
        address: {
          street: "pembina hwy",
          zipCode: "R3T4J5"
        }
      }
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        console.log("response then invoked" + response);
      })
      .catch(error => {
        console.log("error occured" + error);
      });
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

  componentDidMount() {
    axios
      .get("/ingredients.json")
      .then(res => {
        this.setState({ingredients: res.data});
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const disableInfo = {
      less: {...this.state.ingredients},
      more: {...this.state.ingredients}
    };
    for (const key in disableInfo.more) {
      disableInfo.less[key] = this.state.ingredients[key] <= 0;
      disableInfo.more[key] = this.state.ingredients[key] >= 3;
    }
    return (
      <>
        <Modal visible={this.state.purchasing} closed={this.purchaseHandler}>
          {this.state.ingredients && (
            <OrderSummary
              ingredients={this.state.ingredients}
              price={this.state.totalPrice}
              purchaseHandler={this.purchaseHandler}
              purchaseContinueHandler={this.purchaseContinueHandler}
            />
          )}
        </Modal>
        {this.state.ingredients && (
          <>
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
        )}
      </>
    );
  }
}
export default withErrorHandler(BurgerBuilder, axios);
