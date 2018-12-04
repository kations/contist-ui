import React from "react";
import styled from "styled-components";

import Box from "../primitives/Box";

const List = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 12px 24px;
`;

const ListTitle = styled(Box)`
  font-size: 1rem;
`;

/*const ListAction = styled(Absolute)`
  top: 0px;
  right: 0px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 15px 0 0;
`;*/

const ListItem = ({ icon, title, subTitle, actions }) => {
  return (
    <List>
      {icon || null}
      <ListTitle>{title}</ListTitle>
    </List>
  );
};

ListItem.defaultProps = {
  title: "test"
};

export default ListItem;
