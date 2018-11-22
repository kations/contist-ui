import styled from "styled-components";

import Box from "../primitives/Box";
import { getColorString, getColor } from "../../utils";

const pillSizes = {
  l: " 1rem 2rem",
  m: " 0.5rem 1rem",
  s: " 0.25rem 0.5rem"
};

const fontSizes = {
  l: " 1rem",
  m: " 0.9rem",
  s: " 0.8rem"
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
      return getColor(color);
    }
  }};
  border-radius: 25px;
  padding: ${p => pillSizes[p.size]};
`;

Pill.defaultProps = {
  size: "m"
};

export default Pill;
