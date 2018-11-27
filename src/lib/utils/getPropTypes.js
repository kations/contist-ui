import PropTypes from 'prop-types';

import { styleProps } from './';

export const propType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.object,
]);

const getPropTypes = () => {
  let propTypes = {};
  styleProps.map(tag => {
    propTypes[tag] = propType;
    return null;
  });
  return propTypes;
};

export default getPropTypes;
