import React, {Component} from "react";
import Model from "../../components/UI/modal/modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };

    componentDidMount() {
      axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({error: error});
        }
      );
      axios.interceptors.request.use(req => {
        this.setState({error: null});
        return req;
      });
    }

    errorClosedHandler = () => {
      this.setState({error: null});
    };
    render() {
      return (
        <>
          <Model show={this.state.error} closed={this.errorClosedHandler}>
            {this.state.error && this.state.error.message}
          </Model>
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
};
export default withErrorHandler;
