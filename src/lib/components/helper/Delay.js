import React, { Component, Fragment } from "react";
// const DelayUnmount = Component => {
//   return class extends React.Component {
//     state = {
//       shouldRender: this.props.isMounted
//     };
//
//     componentDidUpdate(prevProps) {
//       if (prevProps.isMounted && !this.props.isMounted) {
//         setTimeout(
//           () => this.setState({ shouldRender: false }),
//           this.props.delayTime
//         );
//       } else if (!prevProps.isMounted && this.props.isMounted) {
//         this.setState({ shouldRender: true });
//       }
//     }
//
//     render() {
//       return this.state.shouldRender ? <Component {...this.props} /> : null;
//     }
//   };
// };
//
// export default DelayUnmount;
//
//
class Delay extends React.Component {
  state = {
    shouldRender: false
  };

  componentDidMount() {
    const { mounted, unmount, mount } = this.props;
    if (mounted) {
      setTimeout(() => this.setState({ shouldRender: true }), mount);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { mounted, unmount, mount } = this.props;
    if (mounted === true && nextProps.mounted === false) {
      setTimeout(() => this.setState({ shouldRender: false }), unmount);
    } else if (mounted === false && nextProps.mounted === true) {
      setTimeout(() => this.setState({ shouldRender: true }), mount);
    }
  }

  render() {
    const { children } = this.props;
    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, this.props)
    );
    console.log("this.state.shouldRender ", this.state.shouldRender);
    //return this.state.shouldRender ? childrenWithProps : null;
    return this.state.shouldRender ? this.props.children : null;
  }
}

Delay.defaultProps = {
  mount: 1,
  unmount: 1
};

export default Delay;
