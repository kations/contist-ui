import styled from "styled-components";

import Box from "../primitives/Box";
import { getColorString, getColor } from "../../utils";

const pillSizes = {
  large: " 1rem 2rem",
  medium: " 0.5rem 1rem",
  small: " 0.25rem 0.5rem"
};

const fontSizes = {
  large: " 1rem",
  medium: " 0.9rem",
  small: " 0.8rem"
};

const Pill = styled(Box)`
  position: relative;
  display: inline-block;
  font-size: ${p => fontSizes[p.size]};
  background: ${p => {
    var color = getColorString(p.pillColor, p.theme) || p.theme.colors.primary;
    if (p.invert) {
      return getColor(color);
    } else {
      return color;
    }
  }};
  color: ${p => {
    var color = getColorString(p.pillColor, p.theme) || p.theme.colors.primary;
    if (p.invert) {
      return color;
    } else {
      return getColor(p.pillColor);
    }
  }};
  border-radius: 25px;
  padding: ${p => pillSizes[p.size]};
`;

Pill.defaultProps = {
  size: "medium"
};

export default Pill;
