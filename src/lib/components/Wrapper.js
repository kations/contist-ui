import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 85%;
  max-width: 1200px;
  margin: 0 auto;
`;

Wrapper.propTypes = {
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
};

Wrapper.defaultProps = {
  maxWidth: '1200px',
};

export default Wrapper;
