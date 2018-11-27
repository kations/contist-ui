import React from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";

class Portal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.node = null;
  }

  componentWillUnmount() {
    if (this.node) {
      document.body.removeChild(this.node);
    }
  }

  render() {
    if (!this.props.node && !this.node) {
      this.node = document.createElement("div");
      document.body.appendChild(this.node);
    }
    return createPortal(this.props.children, this.props.node || this.node);
  }
}

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  node: PropTypes.any
};

export default Portal;

// class Portal extends React.Component {
//   componentWillUnmount() {
//     if (this.defaultNode) {
//       document.body.removeChild(this.defaultNode);
//     }
//     this.defaultNode = null;
//   }
//
//   render() {
//     if (!canUseDOM) {
//       return null;
//     }
//     if (!this.props.node && !this.defaultNode) {
//       this.defaultNode = document.createElement('div');
//       document.body.appendChild(this.defaultNode);
//     }
//     return ReactDOM.createPortal(
//       this.props.children,
//       this.props.node || this.defaultNode
//     );
//   }
// }
