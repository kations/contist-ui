import styled from "styled-components";

import Box from "./Box";


export default styled(Box)`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;
