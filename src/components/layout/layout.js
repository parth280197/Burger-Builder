import React, {Component} from "react";
import classes from "./Layout.module.css";
import Toolbar from "../navigation/toolbar/toolbar";
import SideDrawer from "../navigation/sideDrawer/sideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: true
  };
  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  };
  sideDrawerToggleHandler = prevState => {
    this.setState(() => {
      return {showSideDrawer: !prevState.showSideDrawer};
    });
  };
  render() {
    return (
      <>
        <SideDrawer
          isOpen={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <main className={classes.Content}>{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
