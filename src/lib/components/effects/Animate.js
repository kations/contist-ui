import React, { Component, Fragment } from "react";
import styled, { keyframes } from "styled-components";
import VisibilitySensor from "react-visibility-sensor";

import { propsToStyle } from "../../utils";

const rotate = p => keyframes`
  0% {
    ${propsToStyle(p.from, p.theme, "noQuery")};
  }
  100% {
    ${propsToStyle(p.to, p.theme, "noQuery")};
  }
`;

const out = p => keyframes`
  0% {
    ${propsToStyle(p.to, p.theme, "noQuery")};
  }
  100% {
    ${propsToStyle(p.from, p.theme, "noQuery")};
  }
`;

const AniWrapper = styled(({ children, className }) =>
  React.cloneElement(React.Children.only(children), {
    className: `${children.props.className || ""} ${className}`.trim()
  })
)`
  ${p => propsToStyle(p.from, p.theme)};

  &.show {
    animation: ${p => rotate(p)} ${p => p.duration}ms ${p => p.easing}
      ${p => p.mode};
    animation-direction: alternate;
    animation-delay: ${p => p.delay}ms;
    animation-play-state: ${p => (p.playing ? "running" : "paused")};
    animation-iteration-count: ${p => p.count};
  }

  &.hide {
    animation: ${p => out(p)} ${p => p.duration}ms
      cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
  }
`;

class Animate extends Component {
  static defaultProps = {
    from: { opacity: 0, transform: "translate3d(0, 0, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0) scale(1)" },
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    transform: "translate3d(0,0,0)",
    count: 1,
    opacity: "0",
    delay: "0",
    mode: "forwards",
    duration: 300,
    partialVisibility: true,
    offset: 0,
    playing: true
  };

  constructor() {
    super();

    this.state = {
      active: false,
      wasActive: false
    };
  }

  onChange = isVisible => {
    if (isVisible && !this.state.active) {
      this.setState({ active: true });
      setTimeout(() => {
        this.setState({ wasActive: true });
      }, 1000);
    } else if (!this.props.stayVisible) {
      this.setState({ active: false });
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
          partialVisibility={partialVisibility}
        >
          {({ isVisible }) => (
            <AniWrapper
              className={visible ? "show" : this.state.wasActive ? "hide" : ""}
              {...this.props}
            >
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
  }
}

export default Animate;
