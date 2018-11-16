import React, { Fragment } from "react";

class OnMouseOver extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isTrue: false };
  }

  render() {
    const { children, render } = this.props;
    const props = this.state.isTrue;
    if (render) {
      return render(props);
    }
    return (
      <div
        onMouseEnter={() => this.setState({ isTrue: true })}
        onMouseLeave={() => this.setState({ isTrue: false })}
      >
        {children(props)}
      </div>
    );
  }
}

export default OnMouseOver;
