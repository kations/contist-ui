import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { setLightness } from "polished";

import Animate from "../effects/Animate";
import Box from "../primitives/Box";
import Swiper from "./Swiper";

const Tabs = styled(Box)`
  width: 100%;
  position: relative;
  margin: 0 auto;
  max-width: 1400px;
  padding: ${p => (p.padding ? "100px 0" : "0px")};
  z-index: 10;
  display: flex;

  ${p => (p.radio ? "border-radius: 25px;" : "")};
  ${p => (p.radio ? `background: ${p.theme.colors.light};` : "")};

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0px;
    width: 100%;
    height: ${p => p.lineWidth}px;
    background: ${p =>
      p.radio ? "transparent" : setLightness(0.9, p.theme.colors.primary)};
  }
`;

const Tab = styled.div`
  position: relative;
  flex: 1 1 auto;
  font-size: 0.8rem;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 15px 0;
  cursor: pointer;
  z-index: 10;

  flex-grow: 1;
  flex-basis: 0;

  color: ${p => (p.radio && p.active ? "#FFF" : `${p.theme.colors.primary}`)};

  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const TabContent = styled.div`
  width: 100%;
`;

const Indicator = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: ${p => (p.radio ? "100%" : "2px")};
  background: ${p => p.theme.colors.primary};
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  z-index: 1;

  ${p => (p.radio ? "border-radius: 25px;" : "")};
`;

class TabsView extends Component {
  static defaultProps = {
    lineWidth: 2
  };
  constructor() {
    super();
    this.state = {
      activeIndex: 0
    };
  }

  render() {
    const { options, style, children, onChange, radio } = this.props;

    const activeIndex = this.state.activeIndex;

    console.log(React.Children);

    return (
      <Fragment>
        <Tabs style={style} radio={radio} {...this.props}>
          {options.map((option, index) => (
            <Tab
              key={index}
              active={index === activeIndex}
              onClick={() => {
                this.setState({ activeIndex: index });
                if (onChange) {
                  onChange(index, option);
                }
              }}
              radio={radio}
            >
              {option}
            </Tab>
          ))}
          <Indicator
            radio={radio}
            style={{
              width: `${100 / options.length}%`,
              left: `${activeIndex * (100 / options.length)}%`
            }}
          />
        </Tabs>
        <Swiper
          slideWidth="100%"
          gap={0}
          activeSlide={activeIndex}
          data={React.Children.map(children, (child, index) => child)}
          onChangeSlide={activeSlide =>
            this.setState({ activeIndex: activeSlide })
          }
        >
          {({
            activeSlide,
            isScrolling,
            nextSlide,
            prevSlide,
            scrollToIndex,
            renderItems
          }) => (
            <Fragment>
              {renderItems((item, active, index) => (
                <Fragment>{item}</Fragment>
              ))}
            </Fragment>
          )}
        </Swiper>
      </Fragment>
    );
  }
}

export default TabsView;
