import { styleProps } from './';

const toString = value => {
  if (typeof value === 'number') {
    value = value.toString() + 'px';
  }
  return value;
};

const propsToStyle = props => {
  let styleString = '';
  let breakpointsObj =
    props.theme && props.theme.breakpoints
      ? props.theme.breakpoints
      : {
          mb: 0,
          tb: 768,
          dt: 1024,
        };
  let propObj = props || {};
  Object.keys(breakpointsObj).map((key, index) => {
    styleString += `@media (min-width: ${breakpointsObj[key]}px) {`;
    Object.keys(propObj).map((propsKey, index) => {
      if (styleProps[propsKey] !== undefined) {
        if (
          typeof propObj[propsKey] === 'string' ||
          typeof propObj[propsKey] === 'number'
        ) {
          styleString += `${propsKey.replace(
            /([a-z])([A-Z])/g,
            '$1-$2'
          )}: ${toString(props[propsKey])};`;
        } else {
          styleString += `${propsKey.replace(
            /([a-z])([A-Z])/g,
            '$1-$2'
          )}: ${toString(props[propsKey][key])};`;
        }
      }
    });
    styleString += '}';
  });

  //console.log('styleString', styleString);
  return styleString;
};

export default propsToStyle;
