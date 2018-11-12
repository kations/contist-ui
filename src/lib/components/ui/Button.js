import React, { Component } from "react";
import styled, { withTheme } from "styled-components";

import { propsToStyle, styleProps, getColor } from "../../utils";
import Progress from "../Progress";
import Ripple from "../effects/Ripple";
import Box from "../primitives/Box";
import Flex from "../primitives/Flex";

const buttonSizes = {
  large: " 1rem 2rem",
  medium: " 0.7rem 1.5rem",
  small: " 0.5rem 0.8rem"
};

const fontSizes = {
  large: " 1rem",
  medium: " 0.9rem",
  small: " 0.8rem"
};

const Button = styled(Box)`
  position: relative;
  display: inline-block;
  border: none;
  padding: ${p => buttonSizes[p.size]};
  margin: 0;
  text-decoration: none;

  color: ${p => p.buttonText};
  font-size: ${p => fontSizes[p.size]};
  line-height: 1;
  cursor: pointer;
  text-align: center;
  appearance: none;
  background: ${p => p.buttonBackground};
  border-radius: ${p => p.theme.globals.buttonRadius};
  transition: 0.25s cubic-bezier(0.25, 0.25, 0.5, 1.9);

  &:hover {
  }

  span {
    position: relative;
    z-index: 100;
  }

  ${p => propsToStyle(p)};

  circle {
    stroke: transparent;

    &:nth-child(2) {
      stroke: ${p => p.buttonText};
    }
  }

  ${p =>
    p.outline ? `box-shadow: 0 0 0 2px ${p.buttonBackground} inset;` : ""};
  ${p => (p.loading ? "color: transparent;" : "")};
  ${p => (p.outline ? "background: transparent;" : "")};
`;

const ButtonProgress = styled(Progress)`
  position: absolute;
  left: 0;
  top: 0;
`;

class ButtonState extends Component {
  static defaultProps = {
    type: "primary",
    size: "medium",
    loading: false
  };
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  render() {
    const {
      as,
      children,
      loading,
      theme,
      buttonColor,
      invert,
      clean,
      outline
    } = this.props;

    var color = buttonColor || theme.globals.buttonColor;
    var background = theme.colors[color];
    var text = getColor(background);

    var buttonBackground = background;
    var buttonText = text;

    if (invert) {
      buttonText = background;
      buttonBackground = getColor(background);
    }

    if (clean) {
      buttonText = background;
      buttonBackground = "transparent";
    }

    if (outline) {
      buttonText = background;
    }

    return (
      <Button
        as={as || "button"}
        {...this.props}
        loading={loading}
        buttonBackground={buttonBackground}
        buttonText={buttonText}
      >
        <Flex alignItems="center">{children}</Flex>
        {loading ? (
          <Progress
            style={{
              position: "absolute",
              left: 0,
              top: "50%",
              right: 0,
              margin: `-${20 / 2} auto 0 auto`
            }}
            lineWidth={40}
            size={20}
          />
        ) : null}
        <Ripple
          color={clean || outline ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.2)"}
        />
      </Button>
    );
  }
}

Button.propTypes = {
  ...styleProps
};

export default withTheme(ButtonState);
