import { parseToRgb, darken, lighten, setLightness } from "polished";

import DefaultTheme from "../components/DefaultTheme";

export const getColorString = (color, theme) => {
  let colors = theme.colors;
  return colors[color] || color;
};

export const lightOrDark = color => {
  const { red, green, blue } = parseToRgb(color);
  if (red * 0.299 + green * 0.587 + blue * 0.114 > 186) {
    return "dark";
  } else {
    return "light";
  }
};

export const getColor = color => {
  if (color) {
    const variant = lightOrDark(color);
    if (variant === "light") {
      return setLightness(0.94, color);
    } else {
      return setLightness(0.1, color);
    }
  }
};
