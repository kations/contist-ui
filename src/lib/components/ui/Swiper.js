import React, { Component, Children } from "react";
import styled from "styled-components";
import Animate from "../effects/Animate";

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const SliderTrack = styled.div`
  position: relative;
  margin-bottom: -20px;
  padding-bottom: 20px;
  width: 100%;
  height: calc(100% + 20px);
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(${p => p.slideWidth});
  scroll-snap-type: x mandatory;
  display: flex;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
`;

const Slide = styled.div`
  min-width: ${p => p.slideWidth};
  height: auto;
  scroll-snap-align: start;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: ${p => p.gap}px;
`;

const scrollTo = (element, to, duration) => {
  var start = element.scrollLeft,
    change = to - start,
    currentTime = 0,
    increment = 20;

  var animateScroll = function() {
    currentTime += increment;
    var val = Math.easeInOutQuad(currentTime, start, change, duration);
    element.scrollTo(val, 0);
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
    const scrollStep = this.slider.scrollWidth / this.slider.childNodes.length;
    var index = Math.round(e.target.scrollLeft / scrollStep);
    this.setState({ activeSlide: index });
  };

  prevSlide = () => {
    const scrollStep = this.slider.scrollWidth / this.slider.childNodes.length;
    let scrollLeft = this.slider.scrollLeft;
    let scrollWidth = this.slider.scrollWidth;

    if (scrollLeft - scrollStep <= 0) {
      scrollTo(this.slider, 0, 300);
    } else {
      scrollTo(this.slider, scrollLeft - scrollStep, 300);
    }
  };

  nextSlide = () => {
    let scrollLeft = this.slider.scrollLeft;
    let scrollWidth = this.slider.scrollWidth;
    const scrollStep = scrollWidth / this.slider.childNodes.length;

    if (scrollLeft + scrollStep >= scrollWidth) {
      scrollTo(this.slider, scrollWidth, 300);
    } else {
      scrollTo(this.slider, scrollLeft + scrollStep, 300);
    }
  };

  scrollToIndex = index => {
    let scrollWidth = this.slider.scrollWidth;
    const scrollStep = scrollWidth / this.slider.childNodes.length;
    scrollTo(this.slider, index * scrollStep, 300);
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

  renderItems = items => {
    return (
      <SliderTrack {...this.props} ref={this.setRef}>
        {items &&
          items.map((child, index) => {
            return (
              <Slide
                key={index}
                className={this.props.activeSlide === index && "active"}
                {...this.props}
              >
                <Animate
                  from={{
                    transform: "translate3d(0,0,0) scale(0.9)",
                    opacity: 0
                  }}
                  onVisible
                  stayVisible
                >
                  {child}
                </Animate>
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

Swiper.defaultProps = {
  initalSlide: 0,
  slideWidth: "300px",
  gap: 20
};

export default Swiper;
