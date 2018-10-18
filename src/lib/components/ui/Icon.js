import React from "react";
import styled from "styled-components";

import Box from "../primitives/Box";
import { getColor } from "../../utils";

const IconStyle = styled(Box)`
  position: relative;
  width: ${p => p.size || 50}px;
  height: ${p => p.size || 50}px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;

  div {
    position: relative;
    height: ${p => p.lineWidth}px;
    width: ${p => p.size || 50}px;
    transition: all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
    transform-origin: center;
    transform: translate3d(0, 0, 0) rotate(0deg);
    backface-visibility: hidden;
  }

  span {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 0;
    background: ${p => p.theme.colors.primary};
    width: 100%;
    height: ${p => p.lineWidth}px;
    display: block;
    transition: all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
    transform-origin: center;
    transform: translate3d(0, 0, 0) rotate(0deg);
    backface-visibility: hidden;
    border-radius: ${p => p.lineWidth}px;
    box-shadow: 0 0 0 0px ${p => p.theme.colors.primary};

    &:nth-child(2) {
      width: 0px;
    }
  }

  &.burger {
    span {
      &:nth-child(1) {
        transform: translate3d(0, -${p => p.size / 2.9}px, 0);
        width: ${p => p.size * 0.75}px;
      }

      &:nth-child(2) {
        width: ${p => p.size * 0.75}px;
      }

      &:nth-child(3) {
        transform: translate3d(0, ${p => p.size / 2.9}px, 0);
        width: ${p => p.size * 0.75}px;
      }
    }
  }

  &.close {
    span {
      &:nth-child(1) {
        transform: rotate(-45deg);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: rotate(45deg);
      }
    }
  }

  &.arrow-left {
    span {
      &:nth-child(1) {
        transform: translate3d(0, ${p => p.lineWidth / 3}px, 0) rotate(-45deg);
        width: 50%;
        transform-origin: left;
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: translate3d(0, -${p => p.lineWidth / 3}px, 0) rotate(45deg);
        width: 50%;
        transform-origin: left;
      }
    }
  }

  &.arrow-top {
    div {
      transform: rotate(90deg);
    }
    span {
      &:nth-child(1) {
        transform: translate3d(0, ${p => p.lineWidth / 3}px, 0) rotate(-45deg);
        width: 50%;
        transform-origin: left;
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: translate3d(0, -${p => p.lineWidth / 3}px, 0) rotate(45deg);
        width: 50%;
        transform-origin: left;
      }
    }
  }

  &.arrow-right {
    span {
      &:nth-child(1) {
        transform: translate3d(0, ${p => p.lineWidth / 3}px, 0) rotate(45deg);
        width: 50%;
        transform-origin: right;
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: translate3d(0, -${p => p.lineWidth / 3}px, 0) rotate(-45deg);
        width: 50%;
        transform-origin: right;
      }
    }
  }

  &.arrow-down {
    div {
      transform: rotate(90deg);
    }
    span {
      &:nth-child(1) {
        transform: translate3d(0, ${p => p.lineWidth / 3}px, 0) rotate(45deg);
        width: 50%;
        transform-origin: right;
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: translate3d(0, -${p => p.lineWidth / 3}px, 0) rotate(-45deg);
        width: 50%;
        transform-origin: right;
      }
    }
  }

  &.search {
    span {
      &:nth-child(1) {
        opacity: 0;
      }
      &:nth-child(2) {
        transform: translate3d(-${p => p.size / 12}px, -${p =>
  p.size / 2.8}px, 0);
        width: ${p => p.size / 1.7}px;
        height: ${p => p.size / 1.7}px;
        background: transparent
        border-radius: 50%;
        box-shadow: 0 0 0 ${p => p.lineWidth}px ${p => p.theme.colors.primary};
      }
      &:nth-child(3) {
        transform: translate3d(${p => p.size / 4}px, ${p =>
  p.size / 3.8}px, 0) rotate(45deg);
        width: 33.3%;
      }
    }
  }
`;

const Icon = props => (
  <IconStyle {...props} className={props.type}>
    <div>
      <span />
      <span />
      <span />
    </div>
  </IconStyle>
);

Icon.defaultProps = {
  lineWidth: 2,
  type: "burger",
  rounded: true
};

export default Icon;
