import styled from 'styled-components';

import { propsToStyle, styleProps } from '../../utils';

const Box = styled.div`
  ${props => propsToStyle(props)};
`;

Box.propTypes = {
  ...styleProps,
};

export default Box;
