import React, { Component, Fragment } from "react";
import styled, { keyframes } from "styled-components";
const VisibilitySensor = require("react-visibility-sensor");

const rotate = p => keyframes`
  0% {
    opacity: ${p.opacity};
    transform: translate3d(${p.offsetX}, ${p.offsetY}, 0) scale(${p.scale});
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
`;

const out = p => keyframes`
  0% {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
  100% {
    opacity: ${p.opacity};
    transform: translate3d(${p.offsetX}, ${p.offsetY}, 0) scale(${p.scale});
  }
`;

const AniWrapper = styled(({ children, className }) =>
  React.cloneElement(React.Children.only(children), {
    className: `${children.props.className || ""} ${className}`.trim()
  })
)`
  &.show {
    animation: ${p => rotate(p)} ${p => p.duration}ms
      cubic-bezier(0.645, 0.045, 0.355, 1) ${p => p.mode};
    animation-direction: alternate;
  }

  &.hide {
    animation: ${p => out(p)} ${p => p.duration}ms
      cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
  }
`;

class Animate extends Component {
  constructor() {
    super();

    this.state = {
      active: false,
      done: false
    };
  }

  onChange = isVisible => {
    if (isVisible && !this.state.active) {
      this.setState({ active: true });
      setTimeout(() => {
        this.setState({ done: true });
      }, 1000);
    } else if (!this.props.stayVisible) {
      this.setState({ active: false, done: false });
    }
  };

  componentDidMount() {
    if (this.props.css) {
      setTimeout(() => {
        this.setState({ active: true });
      }, 150);
      setTimeout(() => {
        this.setState({ done: true });
      }, 1000);
    }
  }

  render() {
    const {
      children,
      css,
      delay,
      partialVisibility,
      offset,
      offsetY,
      isVisible,
      stayVisible,
      onVisible
    } = this.props;

    var visible = this.state.active || isVisible;

    if (onVisible) {
      return (
        <VisibilitySensor
          active={(!visible && stayVisible) || !stayVisible}
          onChange={this.onChange}
        >
          {({ isVisible }) => (
            <AniWrapper className={visible ? "show" : "hide"} {...this.props}>
              {children}
            </AniWrapper>
          )}
        </VisibilitySensor>
      );
    }

    return (
      <Fragment>
        <AniWrapper className={visible ? "show" : "hide"} {...this.props}>
          {children}
        </AniWrapper>
      </Fragment>
    );

    return (
      <Fragment>
        <VisibilitySensor
          key={"list"}
          onChange={this.onChange}
          partialVisibility={partialVisibility}
          offset={offset}
        >
          <AniWrapper className={visible ? "show" : "hide"} {...this.props}>
            {children}
          </AniWrapper>
        </VisibilitySensor>
      </Fragment>
    );
  }
}

Animate.defaultProps = {
  offsetY: "0px",
  offsetX: "0px",
  opacity: "0",
  scale: "1",
  mode: "forwards",
  duration: 300,
  partialVisibility: true
};

export default Animate;
