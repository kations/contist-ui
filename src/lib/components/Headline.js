// import styled from 'styled-components';
//
// import { propsToStyle, styleProps } from '../utils';
//
// const Headline = styled.h1`
//   ${props => propsToStyle(props)};
// `;
//
// Headline.propTypes = {
//   ...styleProps,
// };
//
//
// Headline.defaultProps = {
//   maxWidth: '1200px',
// };
//
// export default Headline;

import React from 'react';
import styled from 'styled-components';
import { PoseGroup } from 'react-pose';
import SplitText from 'react-pose-text';

import { propsToStyle, styleProps } from '../utils';

const Headline = styled.h1`
  max-width: 100%;
  letter-spacing: 1px;
  word-spacing: 2px;
  ${props => propsToStyle(props)};
`;

Headline.propTypes = {
  ...styleProps,
};

export default props => (
  <Headline
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
  </Headline>
);
