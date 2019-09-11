import React, {Component} from "react";
import Burger from "./../../components/burger/burger";
import BuildControls from "../../components/burger/buildControls/buildControls";
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0
    }
  };
  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls />
      </>
    );
  }
}
export default BurgerBuilder;
