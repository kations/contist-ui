import React from "react";

export const Context = React.createContext();

class Provider extends React.Component {
  constructor(props) {
    super(props);

    const { initialState } = this.props;
    this.initialState = initialState;
    this.state = {
      state: { ...initialState },
      setState: this.handleSetState
    };
  }

  handleSetState = state => {
    this.setState({
      state: {
        ...this.state.state,
        ...state
      }
    });
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export default Provider;
