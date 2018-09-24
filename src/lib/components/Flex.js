import styled from 'styled-components';
import PropTypes from 'prop-types';

import propsToStyle from '../utils/propsToStyle';

const Flex = styled.div`
  display: flex;
  ${props => propsToStyle(props)};
  ${props => console.log('flexprops', props)};
`;

Flex.propTypes = {
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
};

Flex.defaultProps = {
  maxWidth: '1200px',
};

export default Flex;
