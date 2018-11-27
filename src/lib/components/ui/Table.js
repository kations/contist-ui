import styled from "styled-components";

import {
  getColorString,
  getColor,
  propsToStyle,
  styleProps
} from "../../utils";

import DefaultTheme from "../DefaultTheme";

const Table = styled.table`
  position: relative;
  border-collapse: collapse;

  td,
  th {
    border: ${p => p.borderWidth}px solid ${p => p.borderColor};
    padding: 0.5rem;
    font-size: 1rem;
  }

  tr:nth-child(even) {
    background: ${p => getColor(getColorString(p.rowBackground, p.theme))};
  }

  th {
    text-align: left;
    background: ${p => getColorString(p.headBackground, p.theme)};
    color: ${p =>
      p.headColor || getColor(getColorString(p.headBackground, p.theme))};
  }

  ${p => propsToStyle(p, p.theme)};
`;

Table.propTypes = {
  ...styleProps
};

Table.defaultProps = {
  theme: DefaultTheme,
  rowBackground: "primary",
  headBackground: "primary",
  borderWidth: 2,
  borderColor: "#FFF"
};

export default Table;
