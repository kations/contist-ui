import React, { Component } from "react";
import styled from "styled-components";

import Box from "../primitives/Box";

const Grid = styled(Box)`
  display: grid;
  grid-column-gap: ${p => p.gap}px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: ${p => p.rowHeight}px;

  > div {
    padding-bottom: ${p => p.gap}px;
  }
`;

const throttle = (delay, fn) => {
  let lastCall = 0;
  return function(...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  };
};

class Masonry extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0,
      rowHeight: 1
    };
  }

  resizeGrid = node => {
    var grid = node;
    var rowHeight = this.state.rowHeight;
    var rowGap = 0;
    grid.style.gridAutoRows = "auto";
    grid.style.alignItems = "self-start";
    console.log("item.clientHeight", grid);

    grid.childNodes.forEach(item => {
      console.log("item.clientHeight", item.clientHeight, rowHeight, grid);

      item.style.gridRowEnd = `span ${Math.ceil(
        (item.clientHeight + rowGap) / (rowHeight + rowGap)
      )}`;
    });
    grid.removeAttribute("style");
  };

  onResize = () => {
    console.log("resize");
    setTimeout(() => {
      this.resizeGrid(this.slider);
    }, 100);
  };

  setRef = node => {
    if (!this.slider) {
      this.slider = node;
      this.resizeGrid(this.slider);
      window.addEventListener("resize", throttle(100, this.onResize));
    }
  };

  render() {
    const { children, gap } = this.props;

    return (
      <Grid
        ref={this.setRef}
        rowHeight={this.state.rowHeight}
        gap={gap}
        {...this.props}
      >
        {React.Children.map(children, child => (
          <div>{child}</div>
        ))}
      </Grid>
    );
  }
}

Masonry.defaultProps = {
  gap: 20
};

export default Masonry;
