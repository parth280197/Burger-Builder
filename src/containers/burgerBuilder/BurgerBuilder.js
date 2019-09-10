import React, {Component} from "react";
import Burger from "./../../components/burger/burger";
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 2
    }
  };
  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Control</div>
      </>
    );
  }
}
export default BurgerBuilder;
