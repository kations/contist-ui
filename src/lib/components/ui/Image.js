import styled from "styled-components";
import React from "react";

import Box from "../primitives/Box";

const Image = styled(Box)`
  ${p => p.src && `background: url(${p.src})no-repeat!important;`}
  ${p => p.cover && "background-size: cover!important;"}
  ${p => p.cover && "background-position: center center!important;"}
`;

export default props =>
  props.cover ? <Image {...props} /> : <Image as="img" {...props} />;
