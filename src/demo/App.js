import React, { Fragment, Component } from "react";
import {
  Box,
  Wrapper,
  Section,
  Flex,
  Toolbar,
  Reset,
  Input,
  Label,
  FormGroup,
  FormState,
  Headline,
  Progress,
  Button,
  Tilt,
  Ripple,
  Fixed,
  Animate,
  Grid,
  DefaultTheme,
  Avatar,
  Overlay,
  State
} from "../lib";
import Playground from "./components/playground";
import { ThemeProvider } from "styled-components";
import styled, { createGlobalStyle } from "styled-components";
import PropTypes from "prop-types";
import { parseToRgb, darken, lighten, setLightness } from "polished";
import comps from "./comps";
console.log("Flex", Avatar);

const charPoses = {
  enter: {
    opacity: 1,
    scale: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 15,
    transition: { duration: 350 }
  },
  exit: { opacity: 0, scale: 0, y: 50 }
};

const GlobalStyle = createGlobalStyle`
  ${Reset}

  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');

  html,
  body {
    height: 100%;
    width: 100%;
    font-size: 120%;
    background: ${p => setLightness(0.96, p.theme.colors.primary)};
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
    @media (max-width: 768px) {
      font-size: 90%;
    }
  }

  * {
    box-sizing: border-box;
    font-weight: 400;
  }
`;

const components = {
  Fragment,
  Flex,
  Avatar,
  Headline,
  Overlay,
  Button,
  Grid,
  State
};

const ComponentItem = styled(Box)``;

const ComponentPreview = styled(Flex)`
  align-items: center;
  justify-content: center;
  padding: 30px;
  background: #fff;
  box-shadow: 0 10px 20px rgba(91, 107, 174, 0.1);
  border-radius: 10px;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      preview: undefined
    };
  }

  render() {
    return (
      <ThemeProvider theme={DefaultTheme}>
        <Fragment>
          <GlobalStyle />
          <Toolbar position="sticky" top="0px" />
          <Section>
            <Wrapper maxWidth={"700px"}>
              <Grid>
                {comps.map(comp => (
                  <ComponentItem
                    onClick={() => this.setState({ preview: comp.preview })}
                  >
                    <ComponentPreview>{comp.comp}</ComponentPreview>
                    {comp.name}
                  </ComponentItem>
                ))}
              </Grid>

              {this.state.preview ? (
                <Playground
                  title="Avatar"
                  comp={Avatar}
                  components={components}
                  preview={this.state.preview}
                />
              ) : null}
              <Avatar
                display="inline-flex"
                src="https://contist.s3.amazonaws.com/MRMHSGCbznosp2Jpr/best-ware-ideas-plans-unblocked-designs-windows-designer-qonser-with-elevation-blueprint-for-floor-top-photos-luxury-escape-exterior-plan-nadu-lots-mac-pro-design-minecraft-web-mod-728x546.jpg"
              />
              <Avatar char="TS" marginLeft={20} display="inline-flex" />
              <Flex justifyContent="center" marginBottom="50px">
                <Progress size={200} />
                <Progress size={130} progress={60} />
                <Progress size={80} progress={30} />
                <Progress size={30} />
                <Ripple color="#000" />
              </Flex>
              <Animate isVisible>
                <Button invert>Ripple</Button>
              </Animate>
              <Tilt
                options={{ max: 25, scale: 1.05 }}
                padding="20px 20px 5px 20px"
              >
                <Animate offsetY="100px" isVisible>
                  <Flex
                    justifyContent="center"
                    marginBottom="50px"
                    className="Tilt-inner"
                  >
                    <Headline as="h1" charPoses={charPoses}>
                      Build amazing e commerce products
                    </Headline>
                    <Ripple color="#000" />
                  </Flex>
                </Animate>
              </Tilt>

              <FormState
                initialState={{ sdfsf: "sgdffgdgdf" }}
                validate={values => {
                  console.log(values);
                  let errors = {};

                  return errors;
                }}
                onSubmit={(values, isSubmmitted, resetForm) => {
                  console.log(values);
                  setTimeout(() => {
                    //alert(JSON.stringify(values, null, 2));
                    isSubmmitted();
                  }, 4000);
                }}
              >
                {({
                  formState,
                  errors,
                  onSubmit,
                  onChange,
                  onBlur,
                  submitting
                }) => (
                  <Fragment>
                    <Grid>
                      <FormGroup
                        marginBottom="10px"
                        error
                        errorMessage="Required"
                      >
                        <Label htmlFor="sdfsf">test</Label>
                        <Input
                          type="text"
                          id="sdfsf"
                          name="sdfsf"
                          placeholder="das ist ein test"
                          onChange={onChange}
                          onBlur={onBlur}
                        />
                      </FormGroup>
                      <FormGroup marginBottom="10px">
                        <Label htmlFor="sfsdfs">test</Label>
                        <Input
                          type="text"
                          id="sfsdfs"
                          name="sfsdfs"
                          placeholder="das ist ein test"
                          onChange={onChange}
                          onBlur={onBlur}
                        />
                      </FormGroup>
                      <FormGroup
                        marginBottom="10px"
                        padding="0 0 2px 0"
                        floating
                      >
                        <Input
                          type="text"
                          id="dgdfgd"
                          placeholder="das ist ein test"
                        />
                        <Label htmlFor="dgdfgd">test</Label>
                      </FormGroup>
                      <FormGroup marginBottom="10px" radius={8}>
                        <Label htmlFor="dfgfgd">test</Label>
                        <Input
                          as="textarea"
                          id="dfgdfg"
                          placeholder="das ist ein test"
                          disabled
                        />
                      </FormGroup>
                      <FormGroup marginBottom="10px" floating>
                        <Input
                          id="test"
                          placeholder="das ist ein test"
                          as="select"
                        >
                          <option value="" disabled selected>
                            Bitte auswählen
                          </option>
                          <option>createGlobalStyle</option>
                          <option>dfgd</option>
                          <option>test</option>
                        </Input>
                        <Label htmlFor="test">test</Label>
                      </FormGroup>
                      <Tilt options={{ max: 25, scale: 1.05 }}>
                        <FormGroup>
                          <Input
                            type="checkbox"
                            id="fdsdsf"
                            placeholder="das ist ein test"
                          />
                          <Label htmlFor="fdsdsf">test</Label>
                        </FormGroup>
                      </Tilt>
                    </Grid>
                    <Button
                      onClick={onSubmit}
                      disabled={submitting}
                      loading={submitting}
                    >
                      submit
                    </Button>
                    <Button size="medium" loading invert outline>
                      loading
                    </Button>

                    <Button type="clean" size="medium" outline loading>
                      submit
                    </Button>
                    <Button type="clean" size="small" invert loading>
                      submit
                    </Button>
                    <Animate
                      isVisible
                      opacity="1"
                      offsetX={"-10px"}
                      mode="infinite"
                      duration={100}
                    >
                      <Button>Ripple</Button>
                    </Animate>
                    <Animate onVisible>
                      <Button>Ripple</Button>
                    </Animate>
                  </Fragment>
                )}
              </FormState>
            </Wrapper>
          </Section>
          <Section>
            <Wrapper maxWidth={"700px"}>
              <Flex justifyContent="center">test</Flex>
            </Wrapper>
          </Section>
          <Section>
            <Wrapper maxWidth={"700px"}>
              <Flex justifyContent="center">test</Flex>
            </Wrapper>
          </Section>
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
