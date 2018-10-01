import React, { Component } from 'react';
import styled from 'styled-components';

import { propsToStyle, styleProps } from '../utils';
import Progress from './Progress';
import Ripple from './effects/Ripple';

const buttonSizes = {
  large: ' 1rem 2rem',
  medium: ' 0.7rem 1.5rem',
  small: ' 0.5rem 0.8rem',
};

const fontSizes = {
  large: ' 1rem',
  medium: ' 0.9rem',
  small: ' 0.8rem',
};

const Button = styled.button`
  position: relative;
  display: inline-block;
  border: none;
  padding: ${props => buttonSizes[props.size]};
  margin: 0;
  text-decoration: none;

  color: ${props =>
    props.loading === true
      ? 'transparent'
      : props.type === 'tertiary'
        ? props.theme.colors.primary
        : '#fff'};
  font-size: ${props => fontSizes[props.size]};
  line-height: 1;
  cursor: pointer;
  text-align: center;
  appearance: none;
  background: transparent;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    background: ${props => props.theme.colors[props.type]};
    border-radius: ${props => props.theme.globals.buttonRadius};
    transition: 0.25s cubic-bezier(0.25, 0.25, 0.5, 1.9);
  }

  &:hover {
    &:before {
      content: '';
      transform: scale(1.05);
    }
  }

  span {
    position: relative;
    z-index: 100;
  }

  ${props => propsToStyle(props)};

  circle {
    stroke: transparent;

    &.animate {
      stroke: ${props =>
        props.type === 'tertiary' ? props.theme.colors.primary : '#fff'};
    }
  }
`;

const ButtonProgress = styled(Progress)`
  position: absolute;
  left: 0;
  top: 0;
`;

class ButtonState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  render() {
    const { children, loading, type } = this.props;

    return (
      <Button {...this.props} loading={loading}>
        <span>{children}</span>
        {loading ? (
          <Progress
            style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              right: 0,
              margin: `-${20 / 2} auto 0 auto`,
            }}
            lineWidth={40}
            size={20}
          />
        ) : null}
        <Ripple
          color={
            type === 'tertiary' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)'
          }
        />
      </Button>
    );
  }
}

Button.propTypes = {
  ...styleProps,
};

Button.defaultProps = {
  type: 'primary',
  size: 'medium',
  loading: false,
};

export default ButtonState;
