import styled from 'styled-components';

import propsToStyle from '../utils/propsToStyle';

export const Section = styled.section`
  position: relative;
  width: 100%;
  padding: 5rem 0;

  ${props => propsToStyle(props)};
`;

export default Section;
