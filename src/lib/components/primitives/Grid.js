import styled from "styled-components";

import Box from "./Box";

import { propsToStyle } from "../../utils";

export default styled(Box)`
  display: grid;
  ${p =>
    propsToStyle(
      {
        gridTemplateColumns: `repeat(
      auto-fit,
      minmax(${p.min || "300px"}, ${p.max || "1fr"})
    )`,
        gridGap: `${p.gap || "20px"}`
      },
      p.theme
    )};
`;
