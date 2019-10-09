import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import Layout from "./components/layout/Layout";
import BurgerBuilder from "./containers/burgerBuilder/BurgerBuilder";
import Checkout from "./containers/checkout/Checkout";
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route exact path="/Checkout" component={Checkout} />
            <Route exact path="/" component={BurgerBuilder} />
            <Route render={() => <h1>Not Found</h1>} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
