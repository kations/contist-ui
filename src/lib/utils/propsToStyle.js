const isStyleTag = [
  'left',
  'alignItems',
  'justifyContent',
  'flexDirection',
  'width',
  'height',
  'border',
  'position',
  'top',
  'backgroundColor',
  'zIndex',
  'padding',
];

const propsToStyle = (breakpoints, props) => {
  console.log('propsToStyle', breakpoints, props);
  let styleString = '';
  let breakpointsObj = breakpoints || {
    mb: 0,
    tb: 768,
    dt: 1024,
  };
  let propObj = props || {};
  Object.keys(breakpointsObj).map((key, index) => {
    styleString += `@media (min-width: ${breakpoints[key]}px) {`;
    Object.keys(propObj).map((propsKey, index) => {
      if (isStyleTag.indexOf(propsKey) > -1) {
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
