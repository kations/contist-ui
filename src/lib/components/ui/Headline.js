import React from 'react';
import styled from 'styled-components';
import { PoseGroup } from 'react-pose';
import SplitText from 'react-pose-text';

import { propsToStyle, styleProps } from '../../utils';
import Box from '../primitives/Box';

const StyledHeadline = styled(Box)`
  max-width: 100%;
  letter-spacing: 1px;
  word-spacing: 2px;
`;

const Headline = props => (
  <StyledHeadline
    as={props.as}
    style={props.style}
    className={props.className}
    {...props}
  >
    {props.charPoses ? (
      <PoseGroup animateOnMount preEnterPose="exit" flipMove={false}>
        <SplitText key={'dsgdf'} charPoses={props.charPoses}>
          {props.children}
        </SplitText>
      </PoseGroup>
    ) : (
      props.children
    )}
  </StyledHeadline>
);

Headline.defaultProps = {
  as: 'h1',
  charPoses: {
    enter: {
      opacity: 1,
      scale: 1,
      y: 0,
      delay: ({ charIndex }) => charIndex * 15,
      transition: { duration: 350 },
    },
    exit: { opacity: 0, scale: 0, y: 50 },
  },
};

export default Headline;
