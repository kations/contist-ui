import React from "react";
import styled from "styled-components";

import Box from "./Box";

const Section = styled(Box)`
  position: relative;
  width: 100%;
  padding: 5rem 0;
`;

export default props => (
  <Section as="section" {...props}>
    {props.children}
  </Section>
);
