import React, { Component } from "react";
import styled from "styled-components";

import Fixed from "../primitives/Fixed";
import Box from "../primitives/Box";

import Portal from "../helper/Portal";
import Delay from "../helper/Delay";

import Animate from "../effects/Animate";

import { propsToStyle, styleProps } from "../../utils";

const positions = {
  center: "center",
  left: "flex-start",
  right: "flex-end"
};

const Backdrop = styled(Fixed)`
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: ${p => p.theme.globals.backdropColor || "rgba(0,0,0,0.4)"};
  display: flex;
  align-items: safe center;
  justify-content: ${p => positions[p.horizontal]};
  xalign-items: center;
  xjustify-content: center;
  z-index: 500;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  ${p => propsToStyle(p.backdropStyle)}
`;

const OverlayContent = styled(Box)`
  min-width: 300px;
  max-width: 100vw;
  z-index: 600;
  margin: auto 0;
  transition: 0.25s ease-in-out;
  padding: ${p => (p.noBg ? "0px" : "30px")};
  background: ${p => (p.noBg ? "transparent" : "#FFF")};
  box-shadow: ${p => (p.noBg ? "none" : "0 10px 20px rgba(91, 107, 174, 0.1)")};
  ${p => (p.full || p.fullHeight ? "min-height: 100vh;" : "")};
  ${p => (p.full || p.fullWidth ? "min-width: 100vw;" : "")};
  ${p => propsToStyle(p.contentStyle)}
`;

class Overlay extends Component {
  static defaultProps = {
    from: { transform: "translate3d(0, 100px, 0)", opacity: 0 },
    horizontal: "center"
  };

  componentDidUpdate(prevProps) {
    var modalCount;
    if (prevProps.visible && !this.props.visible) {
      modalCount = parseInt(document.body.getAttribute("modal-count"), 10);
      if (modalCount === 1) {
        document.body.removeAttribute("style");
      }
      document.body.setAttribute("modal-count", modalCount - 1);
    } else if (!prevProps.visible && this.props.visible) {
      document.body.style.overflow = "hidden";
      modalCount = parseInt(document.body.getAttribute("modal-count"), 10);
      document.body.setAttribute(
        "modal-count",
        isNaN(modalCount) ? 1 : modalCount + 1
      );
    }
  }

  render() {
    const {
      contentStyle,
      backdropStyle,
      visible,
      handleClose,
      horizontal,
      from,
      to,
      children,
      full,
      fullHeight,
      fullWidth,
      noBg,
      portalNode
    } = this.props;

    const justifyContent = {
      center: "center",
      left: "flex-start"
    };

    return (
      <Delay unmount={300} mounted={visible}>
        <Portal node={portalNode}>
          <Animate isVisible={visible}>
            <Backdrop
              onClick={handleClose}
              backdropStyle={backdropStyle}
              horizontal={horizontal}
            >
              <Animate from={from} to={to} isVisible={visible}>
                <OverlayContent
                  onClick={e => e.stopPropagation()}
                  contentStyle={contentStyle}
                  full={full}
                  fullHeight={fullHeight}
                  fullWidth={fullWidth}
                  noBg={noBg}
                >
                  {children}
                </OverlayContent>
              </Animate>
            </Backdrop>
          </Animate>
        </Portal>
      </Delay>
    );
  }
}

export default Overlay;
