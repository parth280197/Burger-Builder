import React, {Component} from "react";
import CheckoutSummary from "./../../components/order/checkoutSummary/CheckoutSummary";
class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 2,
      cheese: 2,
      bacon: 0
    }
  };

  checkOutContinue = () => {
    this.props.history.replace("/Checkout/Contact-Data");
  };

  checkOutCancel = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkOutCancel={this.checkOutCancel}
          checkOutContinue={this.checkOutContinue}
        />
      </div>
    );
  }
}

export default Checkout;
