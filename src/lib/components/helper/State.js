import React, { Fragment } from "react";

class State extends React.Component {
  constructor(props) {
    super(props);

    const { initialState } = this.props;
    this.initialState = initialState;
    this.state = { ...initialState };
  }

  handleSetState = state => {
    console.log("setState", state);
    this.setState(state);
  };

  resetState = () => {
    this.setState(this.initialState);
  };

  render() {
    const { children, render } = this.props;
    const props = {
      setState: this.handleSetState,
      resetState: this.resetState,
      state: this.state
    };
    if (render) {
      return render(props);
    }
    return children(props);
  }
}

export default State;
