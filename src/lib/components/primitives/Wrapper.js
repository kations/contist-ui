import React from "react";
import styled from "styled-components";

import Box from "./Box";

const Wrapper = styled(Box)`
  position: relative;
  width: ${props => props.theme.globals.wrapperWidth || "85%"};
  max-width: ${props => props.theme.globals.wrapperMaxWidth || "1000px"};
  margin: 0 auto;
`;

export default props => <Wrapper {...props}>{props.children}</Wrapper>;
