import React, { Fragment } from "react";
import styled from "styled-components";

import Box from "../primitives/Box";
import Animate from "../effects/Animate";

const StyledHeadline = styled(Box)`
  max-width: 100%;
  letter-spacing: 1px;
  word-spacing: 2px;
`;

const parseText = (text: string, type: string) => {
  if (typeof text !== "string") return text;
  //if (type === "word") return text.split(" ");
  return text.split("");
};

const Headline = props => (
  <StyledHeadline
    as={props.as}
    style={props.style}
    className={props.className}
    {...props}
  >
    {props.animated
      ? parseText(props.children, "char").map((word, wordIndex) => (
          <Fragment>
            {console.log(parseText(props.children, "char"))}

            <Animate
              from={{ transform: "translate3d(5px, 20px, 0)", opacity: 0 }}
              delay={wordIndex * 20}
              duration={650}
              easing="cubic-bezier(0.68, -0.55, 0.265, 1.55)"
              onVisible={props.onVisible}
              isVisible={props.isVisible && !props.onVisible}
              stayVisible={props.stayVisible}
            >
              <span
                style={
                  word !== " "
                    ? {
                        display: "inline-block"
                      }
                    : null
                }
              >
                {word}
              </span>
            </Animate>
          </Fragment>
        ))
      : props.children}
  </StyledHeadline>
);

Headline.defaultProps = {
  as: "h1",
  animated: false,
  isVisible: true,
  onVisible: false,
  stayVisible: true
};

export default Headline;
