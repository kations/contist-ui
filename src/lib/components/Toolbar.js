import styled from 'styled-components';
import PropTypes from 'prop-types';

import propsToStyle from '../utils/propsToStyle';

const Toolbar = styled.div`
  width: ${props => (props.vertical ? '60px' : '100vw')};
  height: ${props => (props.vertical ? '100vh' : '60px')};
  ${props => propsToStyle(props.theme.breakpoints, props)};
`;

Toolbar.propTypes = {
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
};

Toolbar.defaultProps = {
  backgroundColor: '#FFF',
  border: '1px solid rgba(0,0,0,0.1)',
  vertical: false,
  zIndex: '100',
};

export default Toolbar;
