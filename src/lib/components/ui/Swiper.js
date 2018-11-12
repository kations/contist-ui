import React, { Component, Children } from "react";
import styled from "styled-components";
import Animate from "../effects/Animate";

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const SliderTrack = styled.div`
  position: relative;
  margin-bottom: ${p => (p.horizontal ? "-20px" : "0px")};
  padding-bottom: ${p => (p.horizontal ? "20px" : "0px")};
  width: 100%;
  height: ${p => (p.horizontal ? "calc(100% + 20px)" : "100%")};
  scroll-snap-type: mandatory;
  scroll-snap-points-${p => (p.horizontal ? "x" : "y")}: repeat(${p =>
  p.slideWidth});
  scroll-snap-type: ${p => (p.horizontal ? "x" : "y")} mandatory;
  display: flex;
  flex-direction: ${p => (p.horizontal ? "row" : "column")};
  overflow-x: ${p => (p.horizontal ? "auto" : "hidden")};
  overflow-y: ${p => (p.horizontal ? "hidden" : "auto")};
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
`;

const Slide = styled.div`
  left: 0px;
  min-width: ${p => (p.horizontal ? p.slideWidth : "auto")};
  min-height: ${p => (!p.horizontal ? p.slideWidth : "auto")};
  height: auto;
  scroll-snap-align: start;
  text-align: center;
  position: relative;
  padding-right: ${p => p.gap}px;
`;

const scrollTo = (element, to, duration, horizontal) => {
  var start = horizontal ? element.scrollLeft : element.scrollTop,
    change = to - start,
    currentTime = 0,
    increment = 20;

  var animateScroll = function() {
    currentTime += increment;
    var val = Math.easeInOutQuad(currentTime, start, change, duration);
    if (horizontal) {
      element.scrollTo(val, 0);
    } else {
      element.scrollTo(0, val);
    }

    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };
  animateScroll();
};

Math.easeInOutQuad = function(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

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

export class Swiper extends React.Component {
  static defaultProps: {
    horizontal: true,
    initalSlide: 0,
    slideWidth: "100%",
    gap: 0,
    data: []
  };

  constructor(props) {
    super(props);

    this.state = {
      activeSlide: 0
    };
  }

  componentWillUnmount() {
    this.slider.removeEventListener("scroll", this.onScroll);
  }

  onScroll = e => {
    if (this.scrollTimeout) clearTimeout(this.scrollTimeout);
    let scrollWidth = this.props.horizontal
      ? this.slider.scrollWidth
      : this.slider.scrollHeight;
    const scrollStep = scrollWidth / this.props.data.length;
    let scrolled = this.props.horizontal
      ? e.target.scrollLeft
      : e.target.scrollTop;
    var index = Math.round(scrolled / scrollStep);
    this.setState({ activeSlide: index, isScrolling: true });
    this.scrollTimeout = setTimeout(() => {
      this.setState({ isScrolling: false });
    }, 200);
  };

  prevSlide = () => {
    let scrollWidth = this.props.horizontal
      ? this.slider.scrollWidth
      : this.slider.scrollHeight;
    const scrollStep = scrollWidth / this.props.data.length;
    let scrollLeft = this.state.activeSlide * scrollStep;

    if (scrollLeft - scrollStep <= 0) {
      scrollTo(this.slider, 0, 300, this.props.horizontal);
    } else {
      scrollTo(
        this.slider,
        scrollLeft - scrollStep,
        300,
        this.props.horizontal
      );
    }
  };

  nextSlide = () => {
    let scrollWidth = this.props.horizontal
      ? this.slider.scrollWidth
      : this.slider.scrollHeight;
    const scrollStep = scrollWidth / this.props.data.length;
    let scrollLeft = this.state.activeSlide * scrollStep;

    if (scrollLeft + scrollStep >= scrollWidth) {
      scrollTo(this.slider, scrollWidth, 300, this.props.horizontal);
    } else {
      scrollTo(
        this.slider,
        scrollLeft + scrollStep,
        300,
        this.props.horizontal
      );
    }
  };

  scrollToIndex = index => {
    let scrollWidth = this.props.horizontal
      ? this.slider.scrollWidth
      : this.slider.scrollHeight;
    const scrollStep = scrollWidth / this.props.data.length;
    scrollTo(this.slider, index * scrollStep, 300, this.props.horizontal);
  };

  setRef = node => {
    if (!this.slider) {
      this.slider = node;
      if (this.props.initalSlide !== 0) {
        this.scrollToIndex(this.props.initalSlide);
      }
      this.slider.addEventListener("scroll", throttle(100, this.onScroll));
    }
  };

  renderItems = renderItem => {
    const { horizontal, slideWidth, gap } = this.props;
    return (
      <SliderTrack
        horizontal={horizontal}
        slideWidth={slideWidth}
        ref={this.setRef}
      >
        {this.props.data &&
          this.props.data.map((item, index) => {
            return (
              <Slide
                key={index}
                className={this.state.activeSlide === index && "active"}
                horizontal={horizontal}
                slideWidth={slideWidth}
                gap={gap}
              >
                {renderItem(item, this.state.activeSlide === index, index)}
              </Slide>
            );
          })}
      </SliderTrack>
    );
  };

  render() {
    const { children, render } = this.props;
    const props = {
      activeSlide: this.state.activeSlide,
      isScrolling: this.state.isScrolling,
      scrollToIndex: this.scrollToIndex,
      nextSlide: this.nextSlide,
      prevSlide: this.prevSlide,
      renderItems: this.renderItems
    };
    if (render) {
      return <SliderContainer>{render(props)}</SliderContainer>;
    }
    return <SliderContainer>{children(props)}</SliderContainer>;
  }
}

export default Swiper;
