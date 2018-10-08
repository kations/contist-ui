import styled from 'styled-components';

import { propsToStyle, styleProps } from '../../utils';

import DefaultTheme from '../DefaultTheme';

const Box = styled.div`
  ${props => propsToStyle(props)};
`;

Box.propTypes = {
  ...styleProps,
};

Box.defaultProps = {
  theme: DefaultTheme,
};

export default Box;
