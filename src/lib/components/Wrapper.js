import styled from 'styled-components';
import PropTypes from 'prop-types';

import propsToStyle from '../utils/propsToStyle';

const Wrapper = styled.div`
  width: 85%;
  max-width: ${props => props.theme.globals.wrapperWidth || '1000px'};
  margin: 0 auto;
  ${props => propsToStyle(props.theme.breakpoints, props)};
`;

Wrapper.propTypes = {
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
};

export default Wrapper;
