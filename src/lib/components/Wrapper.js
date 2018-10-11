import styled from "styled-components";

import { propsToStyle, styleProps } from "../utils";

const Wrapper = styled.div`
  position: relative;
  width: 85%;
  max-width: ${props => props.theme.globals.wrapperWidth || "1000px"};
  margin: 0 auto;
  ${props => propsToStyle(props)};
`;

Wrapper.propTypes = {
  ...styleProps
};

export default Wrapper;
