import React, { Fragment, Component } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import styled from "styled-components";
import jsxToString from "jsx-to-string";
import JsxParser from "react-jsx-parser";

import { Box, Headline, Animate } from "../../lib";
import propTypesToObject from "./propsToObj";

const Playground = styled(Box)`
  padding: 30px;
  background: #fff;
  box-shadow: 0 10px 20px rgba(91, 107, 174, 0.1);
  border-radius: 10px 10px 0 0;
`;

const Play = styled(LivePreview)`
  padding: 30px;
  background: #fff;
  height: 50vh;
  box-shadow: 0 10px 20px rgba(91, 107, 174, 0.1);
  border-radius: 10px 10px 0 0;
`;

const Code = styled(LiveEditor)`
  overflow: auto;
  font-size: 1rem;
  height: 50vh;
  box-shadow: 0 10px 20px rgba(91, 107, 174, 0.2);
  border-radius: 0 0 10px 10px;
`;

export default class SubHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: props.preview
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.preview) {
      this.setState({ code: nextProps.preview });
    }
  }

  render() {
    const { title, comp, components, preview } = this.props;
    return (
      <Fragment>
        {/*<Playground>
          <JsxParser components={components} jsx={this.state.code} />
        </Playground>*/}
        <LiveProvider code={this.state.code} scope={components}>
          <LiveError />
          <Play />
          <Code onChange={code => this.setState({ code: code })} />
        </LiveProvider>
        <Animate>
          <Headline as="h2" marginTop={60} marginBottom={60}>
            PropTypes
          </Headline>
        </Animate>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Required</th>
              <th>DefaultValue</th>
            </tr>
          </thead>
          <tbody>
            {propTypesToObject(comp.propTypes, comp.defaultProps).map(
              (prop, index) => {
                if (index > 10) return null;
                return (
                  <tr>
                    <th>{prop.key}</th>
                    <td>3</td>
                    <td>0.7</td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </Fragment>
    );
  }
}
