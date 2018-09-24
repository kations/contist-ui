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
];

const propsToStyle = (breakpoints, props) => {
  let styleString = '';
  Object.keys(breakpoints).map((key, index) => {
    styleString += `@media (min-width: ${breakpoints[key]}px) {`;
    Object.keys(props).map((propsKey, index) => {
      //console.log(isStyleTag.indexOf(propsKey) > -1, key, propsKey);
      if (isStyleTag.indexOf(propsKey) > -1) {
        if (typeof props[propsKey] === 'string') {
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
