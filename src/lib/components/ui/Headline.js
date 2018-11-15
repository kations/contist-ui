import React, { Fragment } from "react";
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

const Headline = props => (
  <StyledHeadline
    as={props.as}
    style={props.style}
    className={props.className}
    {...props}
  >
    {props.animated && typeof props.children === "string"
      ? parseText(props.children, "char").map((word, wordIndex) => (
          <span style={{ display: "inline-block" }} key={wordIndex}>
            {word.map((char, charIndex) => (
              <Fragment key={charIndex}>
                <Animate
                  from={{
                    transform: "translate3d(5px, 20px, 0)",
                    opacity: 0
                  }}
                  delay={
                    wordIndex * props.delay +
                    (charIndex * props.delay) / word.length
                  }
                  duration={props.duration}
                  easing="cubic-bezier(0.68, -0.55, 0.265, 1.55)"
                  onVisible={props.onVisible}
                  isVisible={props.isVisible && !props.onVisible}
                  stayVisible={props.stayVisible}
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
      : props.children}
  </StyledHeadline>
);

Headline.propTypes = {
  onVisible: PropTypes.bool
};

Headline.defaultProps = {
  as: "h1",
  animated: false,
  isVisible: true,
  onVisible: false,
  stayVisible: true,
  delay: 100,
  duration: 1000
};

export default Headline;
