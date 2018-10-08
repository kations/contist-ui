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
class DelayUnmount extends React.Component {
  state = {
    shouldRender: this.props.mounted
  };

  componentWillReceiveProps(nextProps) {
    const { mounted, delay } = this.props;
    if (mounted === true && nextProps.mounted === false) {
      setTimeout(() => this.setState({ shouldRender: false }), delay);
    } else if (mounted === false && nextProps.mounted === true) {
      this.setState({ shouldRender: true });
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

export default DelayUnmount;
