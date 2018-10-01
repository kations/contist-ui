import React, { Component, Fragment } from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
const VisibilitySensor = require('react-visibility-sensor');

const animate = keyframes`
	from {
		transform: translate3d(0, 25px, 0);
    opacity: 0;
	}

	to {
		transform: translate3d(0, 0, 0);
    opacity: 1;
	}
`;

const AnimateStyle = createGlobalStyle`
  .animate {
    opacity: 0!important;
    transition: all 750ms cubic-bezier(0.645, 0.045, 0.355, 1);
    transform: translate3d(0, 25px, 0);

    &.in {
      opacity: 1!important;
      transform: translate3d(0, 0, 0);
    }
  }
`;

const StyledAnimateIn = styled.div`
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
  transform: translate3d(0, 25px, 0);

  &.isAnimated {
    animation: ${animate} 750ms cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
    animation-delay: ${props => (props.delay ? props.delay : 0)}ms;
  }

  &.isVisible {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

class Animate extends Component {
  constructor() {
    super();

    this.state = {
      active: false,
      done: false,
    };
  }

  onChange = isVisible => {
    console.log(isVisible);
    if (isVisible && !this.state.active) {
      console.log('visible');
      this.setState({ active: true });
      setTimeout(() => {
        this.setState({ done: true });
      }, 1000);
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

  renderChildren = () => {
    const { children } = this.props;
    return React.Children.map(children, child => {
      return React.cloneElement(child, {
        ...child.props,
        className:
          (this.state.active && !this.state.done) || this.props.css
            ? 'animate in'
            : this.state.done
              ? ''
              : 'animate',
      });
      React.cloneElement(child, {
        gutter: this.props.gutter,
      });
    });
  };

  render() {
    const { children, css, delay } = this.props;

    return (
      <Fragment>
        <AnimateStyle />
        <VisibilitySensor key={'list'} onChange={this.onChange}>
          <Fragment>{this.renderChildren()}</Fragment>
        </VisibilitySensor>
      </Fragment>
    );
  }
}

export default Animate;
