import React, { Component } from "react";
import styled from "styled-components";
import ReactResizeDetector from "react-resize-detector";
import { setLightness } from "polished";
import PropTypes from "prop-types";

import Box from "../primitives/Box";

const Range = styled(Box)`
  position: relative;
  width: 100%;
  height: ${p => p.thumbSize + 40}px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  outline: none;
  overflow: hidden;
  padding: 0 ${p => p.thumbSize / 2}px;

  .track {
    position: relative;
    height: ${p => p.trackHeight}px;
    border-radius: ${p => p.trackRadius};
    width: 100%;
    background: #d3d3d3;
  }

  input {
    position: absolute;
    left: 0;
    bottom: -${p => p.thumbSize}px;
    -webkit-appearance: none;
    width: 100%;
    height: ${p => p.thumbSize}px;
    outline: none;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    z-index: 20;

    &::-webkit-slider-thumb {
      transform: translate3d(0, -${p => p.thumbSize + 20}px, 0);
      -webkit-appearance: none;
      appearance: none;
      width: ${p => p.thumbSize}px;
      height: ${p => p.thumbSize}px;
      border-radius: ${p => p.thumbRadius};
      background: ${p => p.thumbColor || p.theme.colors.primary};
      box-shadow: 0 1px 6px rgba(0, 0, 0, 0.25);
      cursor: pointer;
    }

    &::-moz-range-thumb {
      transform: translate3d(0, -30px, 0);
      -webkit-appearance: none;
      appearance: none;
      width: ${p => p.thumbSize}px;
      height: ${p => p.thumbSize}px;
      border-radius: 50%;
      background: ${p => p.thumbColor || p.theme.colors.primary};
      cursor: pointer;
    }
  }
`;

const RangeIdikator = styled.div`
  position: absolute;
  left: ${p => p.left}%;
  width: ${p => p.width}%;
  top: 0px;
  height: 100%;
  border-radius: ${p => p.trackRadius};
  z-index: 10;
  background: ${p =>
    p.thumbColor || setLightness(0.5 - p.index * 0.1, p.theme.colors.primary)};

  &:after {
    content: "${p => p.leftValue}";
    position: absolute;
    left: -${p => p.thumbSize / 2}px;
    top: -${p => p.thumbSize}px;
    color: #000;
    width: ${p => p.thumbSize}px;
    height: ${p => p.thumbSize}px;
    text-align: center;
    font-size: 0.8rem;
    z-index: 9999;
    pointer-events: none;
  }

  &:before {
    content: "${p => p.rightValue}";
    position: absolute;
    right: -${p => p.thumbSize / 2}px;
    top: -${p => p.thumbSize}px;
    color: #000;
    width: ${p => p.thumbSize}px;
    height: ${p => p.thumbSize}px;
    text-align: center;
    font-size: 0.8rem;
    z-index: 9999;
    pointer-events: none;
  }
`;

const Steps = styled.div`
  display: flex;
  width: 100%;
  height: ${p => p.thumbSize / 2 + 20}px;
  position: absolute;
  left: 0;
  bottom: 0;
  justify-content: space-between;
  padding: 0 ${p => p.thumbSize / 2}px;
  z-index: 0;

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    height: ${p => p.thumbSize / 2 + 5}px;
    width: 1px;
    background: #d3d3d3;
    text-align: center;
    font-size: 0.6rem;
  }
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 1px;
  height: ${p => p.thumbSize / 2 + 5}px;
`;

const Line = styled.div`
  height: ${p => (p.hasNumber ? "20px" : "10px")};
  width: 1px;
  background: #d3d3d3;
`;

const StepText = styled.p`
  text-align: center;
  font-size: 0.6rem;
  color: #000;
`;

class RangeSlider extends Component {
  static defaultProps = {
    thumbSize: 30,
    thumbRadius: "50%",
    thumbValues: true,
    trackHeight: 10,
    trackRadius: "10px",
    trackScale: true,
    min: 0,
    max: 100
  };

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      rowHeight: 1,
      value: props.value
    };
  }

  render() {
    const { min, max, onChange, trackRadius, thumbSize } = this.props;
    const { value } = this.state;
    var steps = Array.from(Array(max / 10 + 1).keys());

    const settings = {
      thumbSize: thumbSize,
      thumbRadius: this.props.thumbRadius,
      trackHeight: this.props.trackHeight,
      trackRadius: this.props.trackRadius
    };

    return (
      <Range {...settings}>
        <div className="track">
          {typeof value !== "object" ? (
            <RangeIdikator
              left={0}
              index={0}
              width={(max / 100) * value}
              rightValue={value}
              trackRadius={trackRadius}
              thumbSize={thumbSize}
            />
          ) : (
            value.map((val, index) => {
              if (index === value.length - 1) return null;
              return (
                <RangeIdikator
                  key={index}
                  index={index}
                  leftValue={val}
                  rightValue={
                    index === value.length - 2 ? value[index + 1] : undefined
                  }
                  left={(max / 100) * val}
                  width={(max / 100) * value[index + 1] - val}
                  trackRadius={trackRadius}
                  thumbSize={thumbSize}
                />
              );
            })
          )}
        </div>
        {typeof value !== "object" ? (
          <input
            type="range"
            min={min}
            max={max}
            value={value}
            onMouseUp={() => onChange(value)}
            onChange={e => this.setState({ value: parseFloat(e.target.value) })}
          />
        ) : (
          value.map((val, index) => (
            <input
              key={index}
              type="range"
              min={min}
              max={max}
              value={value[index]}
              onMouseUp={() => onChange(value)}
              onChange={e => {
                if (value[index - 1] && e.target.value < value[index - 1]) {
                  return false;
                } else if (
                  value[index + 1] &&
                  e.target.value > value[index + 1]
                ) {
                  return false;
                } else {
                  value[index] = parseFloat(e.target.value);
                }
                this.setState({ value: value });
              }}
              {...settings}
            />
          ))
        )}
        <Steps {...settings}>
          {steps.map((step, index) => (
            <Step key={index}>
              <Line hasNumber={index % 2 === 0} />
              <StepText>{index % 2 === 0 ? step * 10 : null}</StepText>
            </Step>
          ))}
        </Steps>
      </Range>
    );
  }
}

RangeSlider.propTypes = {
  thumbSize: PropTypes.number,
  thumbRadius: PropTypes.string,
  trackHeight: PropTypes.number,
  trackRadius: PropTypes.string
};

export default RangeSlider;
