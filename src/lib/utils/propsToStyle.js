import { styleProps } from './';

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
        if (typeof propObj[propsKey] === 'string') {
          styleString += `${propsKey.replace(/([a-z])([A-Z])/g, '$1-$2')}: ${
            props[propsKey]
          };`;
        } else {
          styleString += `${propsKey.replace(/([a-z])([A-Z])/g, '$1-$2')}: ${
            props[propsKey][key]
          };`;
        }
      }
    });
    styleString += '}';
  });

  //console.log('styleString', styleString);
  return styleString;
};

export default propsToStyle;
