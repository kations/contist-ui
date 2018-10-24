import React, { Fragment } from "react";

class State extends React.Component {
  constructor(props) {
    super(props);

    const { initialState } = this.props;
    this.initialState = initialState;
    this.state = { ...initialState };
  }

  handleSetState = state => {
    this.setState(state);
  };

  componentWillUpdate(nextProps, nextState) {
    if (this.props.persist) {
      localStorage.setItem(this.props.persist, JSON.stringify(nextState));
    }
  }

  componentDidMount() {
    if (this.props.persist) {
      var state = localStorage.getItem(this.props.persist);
      if (state !== null) {
        this.setState(JSON.parse(state));
      }
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
