import React from "react";

const isLocalStorageNameSupported = () => {
  var testKey = "test",
    storage = window.sessionStorage;
  try {
    storage.setItem(testKey, "1");
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
};

class State extends React.Component {
  constructor(props) {
    super(props);

    var initialState = props.initialState || {};
    if (
      props.persist &&
      typeof document !== "undefined" &&
      isLocalStorageNameSupported()
    ) {
      var state = localStorage.getItem(this.props.persist);
      if (state) {
        initialState = JSON.parse(localStorage.getItem(props.persist));
      }
    }
    this.initialState = initialState;
    this.state = { ...initialState };
  }

  handleSetState = state => {
    this.setState(state);
  };

  componentWillUpdate(nextProps, nextState) {
    if (
      this.props.persist &&
      nextState !== this.state &&
      typeof document !== "undefined" &&
      isLocalStorageNameSupported()
    ) {
      localStorage.setItem(this.props.persist, JSON.stringify(nextState));
    }
  }

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
