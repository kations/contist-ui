import styled from "styled-components";
import React from "react";

import Box from "../primitives/Box";

const Image = styled(Box)`
  ${p => p.cover && "background-size: cover!important;"}
  ${p => p.cover && "background-positon: center center!important;"}
`;

export default props =>
  props.cover ? <Image {...props} /> : <Image as="img" {...props} />;
