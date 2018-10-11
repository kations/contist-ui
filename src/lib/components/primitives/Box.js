import styled from "styled-components";

import { propsToStyle, styleProps } from "../../utils";

import DefaultTheme from "../DefaultTheme";

const Box = styled.div`
  ${p => propsToStyle(p, p.theme)};
`;

Box.propTypes = {
  ...styleProps
};

Box.defaultProps = {
  theme: DefaultTheme
};

export default Box;
