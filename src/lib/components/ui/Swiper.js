import React from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const TrackContainer = styled.div`
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

const scrollTo = (element, to, horizontal) => {
  if (horizontal) {
    element.scrollTo({
      left: to,
      behavior: "smooth"
    });
  } else {
    element.scrollTo({
      top: to,
      behavior: "smooth"
    });
  }
};

// const throttle = (delay, fn) => {
//   let lastCall = 0;
//   return function(...args) {
//     const now = new Date().getTime();
//     if (now - lastCall < delay) {
//       return;
//     }
//     lastCall = now;
//     return fn(...args);
//   };
// };

export class Swiper extends React.Component {
  static defaultProps = {
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeSlide !== this.props.activeSlide) {
      this.scrollToIndex(nextProps.activeSlide);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.activeSlide !== this.state.activeSlide &&
      this.props.onChangeSlide
    ) {
      this.props.onChangeSlide(this.state.activeSlide);
    }
  }

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
      // this.slider.addEventListener("scroll", throttle(100, this.onScroll));
      this.slider.addEventListener("scroll", this.onScroll);
    }
  };

  renderItems = renderItem => {
    const { horizontal, slideWidth, gap } = this.props;
    return (
      <TrackContainer>
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
      </TrackContainer>
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
