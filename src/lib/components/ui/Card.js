import styled from "styled-components";
import { rgba, darken, lighten, setLightness } from "polished";

import Box from "../primitives/Box";
import { getColor } from "../../utils";

const Card = styled(Box)`
  background: ${p => p.theme.colors.light}
  box-shadow: 0 ${p => p.depth}px ${p => p.depth * 2}px ${p =>
  rgba(setLightness(0.3, p.shadowColor || p.theme.colors.primary), 0.075)};
  transform: scale(1);

  transition: 0.25s ease-in-out;

  &:hover {
    box-shadow: 0 ${p => p.hoverDepth}px ${p => p.hoverDepth * 2}px ${p =>
  rgba(setLightness(0.3, p.shadowColor || p.theme.colors.primary), 0.05)});
    transform: scale(${p => 1 + p.hoverScale});
  }
`;

Card.defaultProps = {
  depth: 8,
  hoverDepth: 4,
  hoverScale: 0
};

export default Card;
