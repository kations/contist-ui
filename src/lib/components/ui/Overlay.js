import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";

import Fixed from "../primitives/Fixed";
import Box from "../primitives/Box";

import Portal from "../helper/Portal";
import Delay from "../helper/Delay";

import Animate from "../effects/Animate";
import { getColor } from "../../utils";

const Backdrop = styled(Fixed)`
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: ${p => p.theme.globals.backdropColor};
  display: flex;
  align-items: safe center;
  justify-content: center;
  xalign-items: center;
  xjustify-content: flex-start;
  z-index: 500;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;

const OverlayContent = styled(Box)`
  min-width: 300px;
  max-width: 100vw;
  z-index: 600;
  margin: auto;
  padding: ${p => (p.noBg ? "0px" : "30px")};
  background: ${p => (p.noBg ? "transparent" : "#FFF")};
  box-shadow: ${p => (p.noBg ? "none" : "0 10px 20px rgba(91, 107, 174, 0.1)")};
  ${p => (p.full || p.fullHeight ? "height: 100vh;" : "")};
  ${p => (p.full || p.fullWidth ? "width: 100vw;" : "")};
`;

class Overlay extends Component {
  componentDidUpdate(prevProps) {
    var modalCount;
    if (prevProps.visible && !this.props.visible) {
      modalCount = parseInt(document.body.getAttribute("modal-count"));
      if (modalCount === 1) {
        document.body.removeAttribute("style");
      }
      document.body.setAttribute("modal-count", modalCount - 1);
    } else if (!prevProps.visible && this.props.visible) {
      document.body.style.overflow = "hidden";
      modalCount = parseInt(document.body.getAttribute("modal-count"));
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
      position,
      from,
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
              justifyContent={justifyContent[position]}
              style={backdropStyle}
            >
              <Animate from={from} isVisible={visible}>
                <OverlayContent
                  onClick={e => e.stopPropagation()}
                  style={contentStyle}
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

Overlay.defaultProps = {
  from: { transform: "translate3d(0, 100px, 0)", opacity: 0 },
  position: "center"
};

export default Overlay;
