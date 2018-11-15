import React, { Fragment, PureComponent } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Box from "../primitives/Box";
import Animate from "../effects/Animate";

const StyledHeadline = styled(Box)`
  max-width: 100%;
  letter-spacing: 1px;
  word-spacing: 2px;
  word-wrap: break-word;
  line-height: 1.5;
`;

const parseText = (text: string, type: string) => {
  if (typeof text !== "string") return text;
  return text.split(" ").map(word => word.split(""));
  return text.split("");
};

class Headline extends PureComponent {
  static defaultprops = {
    as: "h1",
    animated: false,
    isVisible: true,
    onVisible: false,
    stayVisible: true,
    delay: 100,
    duration: 1000
  };

  render() {
    return (
      <StyledHeadline
        as={this.props.as}
        style={this.props.style}
        className={this.props.className}
        {...this.props}
      >
        {this.props.animated && typeof this.props.children === "string"
          ? parseText(this.props.children, "char").map((word, wordIndex) => (
              <span style={{ display: "inline-block" }} key={wordIndex}>
                {word.map((char, charIndex) => (
                  <Fragment key={charIndex}>
                    <Animate
                      from={{
                        transform: "translate3d(5px, 20px, 0)",
                        opacity: 0
                      }}
                      delay={
                        wordIndex * this.props.delay +
                        (charIndex * this.props.delay) / word.length
                      }
                      duration={this.props.duration}
                      easing="cubic-bezier(0.68, -0.55, 0.265, 1.55)"
                      onVisible={this.props.onVisible}
                      isVisible={this.props.isVisible && !this.props.onVisible}
                      stayVisible={this.props.stayVisible}
                    >
                      <span
                        style={{
                          display: "inline-block"
                        }}
                      >
                        {char}
                      </span>
                    </Animate>
                    {word.length - 1 === charIndex ? "\u00A0" : null}
                  </Fragment>
                ))}
              </span>
            ))
          : this.props.children}
      </StyledHeadline>
    );
  }
}

Headline.propTypes = {
  onVisible: PropTypes.bool
};

export default Headline;
