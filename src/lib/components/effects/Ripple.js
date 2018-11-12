import React, { Fragment } from "react";
import styled, { keyframes } from "styled-components";

import { propsToStyle, styleProps } from "../../utils";
import Box from "../primitives/Box";

const ripple = keyframes`
  100% {
    transform: scale(1);
    opacity: 0;
  }
`;

const RippleWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const RippleEffect = styled(Box)`
  position: absolute;
  border-radius: 50%;
  opacity: 1;
  transform: scale(0);
  z-index: 500;

  &.is-reppling {
    animation: ${ripple} 0.5s linear;
  }

  &-parent {
    position: relative;
  }
`;

class Ripple extends React.Component {
  static defaultProps: {
    color: "rgba(255,255,255,0.3)",
    maxSize: 100
  };

  constructor() {
    super();
    this.state = {
      animate: false,
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      cursorPos: {}
    };
  }
  componentDidMount() {
    let $ripple = this.refs.ripple;
    if (this.props.hidden) {
      $ripple.parentElement.setAttribute(
        "style",
        "position:relative;overflow:hidden;"
      );
    } else {
      $ripple.parentElement.setAttribute("style", "position:relative;");
    }
    $ripple.parentElement.addEventListener("mouseup", this.handleClick);
    $ripple.parentElement.addEventListener("touchend", this.handleClick);
  }

  handleClick = e => {
    // Get Cursor Position
    let cursorPos = {
      top: e.clientY,
      left: e.clientX,
      // Prevent Component duplicates do ripple effect at the same time
      time: Date.now()
    };
    this.setState({ cursorPos: cursorPos });
    this.handleRipple(cursorPos);
  };

  handleRipple = cursorPos => {
    if (this.state.animate) {
      this.setState({ animate: false }, () => {
        this.reppling(cursorPos);
      });
    }
    // else, Do Reppling
    else this.reppling(cursorPos);
  };

  render() {
    const { children, color } = this.props;
    return (
      <RippleEffect
        className={"Ripple " + (this.state.animate ? "is-reppling" : "")}
        ref="ripple"
        style={{
          top: this.state.top + "px",
          left: this.state.left + "px",
          width: this.state.width + "px",
          height: this.state.height + "px"
        }}
        background={this.props.color}
      />
    );
  }

  reppling(cursorPos) {
    // Get the element
    let ripple = this.refs.ripple;
    let parent = ripple.parentElement;

    let buttonPos = parent.getBoundingClientRect();

    let buttonWidth = parent.offsetWidth;
    let buttonHeight = parent.offsetHeight;

    // Make a Square Ripple
    let rippleSize = Math.min(buttonHeight * 2, buttonWidth * 2);
    if (rippleSize > this.props.maxSize) {
      rippleSize = this.props.maxSize;
    }

    // Make Ripple Position to be center
    let centerize = rippleSize / 2;

    this.setState({
      animate: true,
      width: rippleSize,
      height: rippleSize,
      top: cursorPos.top - buttonPos.top - centerize,
      left: cursorPos.left - buttonPos.left - centerize
    });
  }
}

export default Ripple;
