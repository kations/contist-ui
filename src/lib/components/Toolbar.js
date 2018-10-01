import styled from 'styled-components';

import { propsToStyle, styleProps } from '../utils';

const Toolbar = styled.div`
  width: ${props => (props.vertical ? '60px' : '100vw')};
  height: ${props => (props.vertical ? '100vh' : '60px')};
  ${props => propsToStyle(props)};
`;

Toolbar.propTypes = {
  ...styleProps,
};

Toolbar.defaultProps = {
  backgroundColor: '#FFF',
  border: '1px solid rgba(0,0,0,0.1)',
  vertical: false,
  zIndex: '100',
};

export default Toolbar;
