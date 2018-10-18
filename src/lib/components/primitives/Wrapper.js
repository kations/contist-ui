import React from "react";
import styled from "styled-components";

import Box from "./Box";

const Wrapper = styled(Box)`
  position: relative;
  width: 85%;
  max-width: ${props => props.theme.globals.wrapperWidth || "1000px"};
  margin: 0 auto;
`;

export default props => <Wrapper {...props}>{props.children}</Wrapper>;
