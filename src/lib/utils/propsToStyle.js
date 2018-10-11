import { styleProps } from "./";

import DefaultTheme from "../components/DefaultTheme";

const toString = (value, key) => {
  if (typeof value === "number") {
    var add = key === "opacity" ? "" : "px";
    value = value.toString() + add;
  }
  return value;
};

const propsToStyle = (props, theme, noQuery) => {
  let styleString = "";
  theme = theme || DefaultTheme;
  let breakpointsObj =
    theme && theme.breakpoints
      ? theme.breakpoints
      : {
          mb: 0,
          tb: 768,
          dt: 1024
        };
  let propObj = props || {};
  let colors = theme.colors;
  Object.keys(breakpointsObj).map((key, index) => {
    styleString += noQuery
      ? ""
      : `@media (min-width: ${breakpointsObj[key]}px) {`;
    Object.keys(propObj).map((propsKey, index) => {
      if (styleProps[propsKey] !== undefined) {
        if (
          typeof propObj[propsKey] === "string" ||
          typeof propObj[propsKey] === "number"
        ) {
          styleString += `${propsKey.replace(
            /([a-z])([A-Z])/g,
            "$1-$2"
          )}: ${toString(
            colors[props[propsKey]] || props[propsKey],
            propsKey
          )};`;
        } else {
          styleString += `${propsKey.replace(
            /([a-z])([A-Z])/g,
            "$1-$2"
          )}: ${toString(
            colors[props[propsKey][key]] || props[propsKey][key],
            propsKey
          )};`;
        }
      }
    });
    styleString += noQuery ? "" : "}";
  });

  //console.log('styleString', styleString);
  return styleString;
};

export default propsToStyle;
