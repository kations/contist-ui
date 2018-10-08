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
    return this.props.children({
      setState: this.handleSetState,
      resetState: this.resetState,
      state: this.state
    });
  }
}

export default State;
