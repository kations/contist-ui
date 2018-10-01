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

const Headline = styled.h1`
  color: #000;
  max-width: 100%;
  letter-spacing: 1px;
  word-spacing: 2px;
`;

export default ({ as, children, className, style, charPoses }) => (
  <Headline as={as} style={style} className={className}>
    {charPoses ? (
      <PoseGroup animateOnMount preEnterPose="exit" flipMove={false}>
        <SplitText key={'dsgdf'} charPoses={charPoses}>
          {children}
        </SplitText>
      </PoseGroup>
    ) : (
      children
    )}
  </Headline>
);
