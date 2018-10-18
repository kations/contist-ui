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
  State,
  Icon,
  setLightness,
  Tabs,
  Card
} from "../lib";
import Playground from "./components/playground";
import { ThemeProvider } from "styled-components";
import styled, { createGlobalStyle } from "styled-components";
import PropTypes from "prop-types";
import { ui, primitives, effects } from "./comps";
console.log("Flex", Avatar);

const GlobalStyle = createGlobalStyle`
  ${Reset}

  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,800');

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

  h1 {
    line-height: 1.2!important;
  }

  h3 {
    text-transform: uppercase;
  }
`;

const components = {
  Box,
  Fragment,
  Flex,
  Avatar,
  Headline,
  Overlay,
  Button,
  Grid,
  State,
  Progress,
  Tilt,
  Ripple,
  Icon,
  Tabs
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      preview: undefined,
      modal: false
    };
  }

  render() {
    var compItem = (comp, index) => (
      <Animate
        from={{ transform: "translate3d(5px, 50px, 0)", opacity: 0 }}
        delay={index * 100}
        onVisible
        stayVisible
      >
        <Box
          onClick={() =>
            this.setState({
              preview: comp.preview,
              comp: comp.name,
              modal: true
            })
          }
        >
          <Tilt options={{ max: 15, scale: 1.025 }}>
            <Flex
              as={Card}
              alignItems="center"
              justifyContent="center"
              borderRadius="10px"
              height="200px"
              padding="30px"
            >
              {comp.comp}
            </Flex>
          </Tilt>
          {comp.name}
        </Box>
      </Animate>
    );
    return (
      <ThemeProvider theme={DefaultTheme}>
        <Fragment>
          <GlobalStyle />
          <Flex
            background="primary"
            height="90vh"
            alignItems="center"
            background={setLightness(0.85, "#455acf")}
            backgroundSize="cover"
          >
            <Wrapper>
              <Headline as="h1" color="primary" maxWidth="600px" animated>
                React + Styled components UI system
              </Headline>
              <Headline as="p" color="#FFF" maxWidth="600px" margin="30px 0">
                ContistUI is based on styled components v4 an aims for and easy
                solution for nearly all of your UI needs.
              </Headline>
              <Button as="a" href="">
                Github
              </Button>
            </Wrapper>
          </Flex>

          <Section>
            <Wrapper>
              <Card margin="50px 0">test</Card>
              <Tabs
                options={["vegetarisch", "vegan"]}
                onChange={(index, value) => console.log(index, value)}
                radio
              />
              <Tabs
                options={["vegetarisch", "vegan"]}
                onChange={(index, value) => console.log(index, value)}
              >
                <div>test</div>
                <div>test 2</div>
              </Tabs>
              <Animate offsetY="100px" isVisible>
                <Headline as="h3" marginBottom={20} marginTop={50} animated>
                  PRIMITIVES
                </Headline>
              </Animate>
              <Grid>
                {primitives.map((comp, index) => compItem(comp, index))}
              </Grid>
              <Animate offsetY="100px" isVisible>
                <Headline as="h3" marginBottom={20} marginTop={50} animated>
                  Effects
                </Headline>
              </Animate>
              <Grid>{effects.map((comp, index) => compItem(comp, index))}</Grid>
              <Animate offsetY="100px" isVisible>
                <Headline as="h3" marginBottom={20} marginTop={50} animated>
                  UI Elements
                </Headline>
              </Animate>
              <Grid>{ui.map((comp, index) => compItem(comp, index))}</Grid>

              <Overlay
                visible={this.state.modal}
                handleClose={() => this.setState({ modal: false })}
                contentStyle={{ width: "90vw", maxWidth: "1000px" }}
                backdropStyle={{ paddingTop: 20 }}
                noBg
              >
                <Playground
                  title={this.state.comp}
                  comp={components[this.state.comp]}
                  components={components}
                  preview={this.state.preview || ""}
                />
              </Overlay>

              <Animate isVisible>
                <Button display={{ dt: "none" }} invert>
                  Ripple
                </Button>
              </Animate>
              <Tilt
                options={{ max: 25, scale: 1.05 }}
                padding="20px 20px 5px 20px"
              >
                <Flex
                  justifyContent="center"
                  marginBottom="50px"
                  className="Tilt-inner"
                >
                  <Headline as="h1" animated onVisible>
                    Build amazing e commerce products
                  </Headline>
                  <Ripple color="#000" />
                </Flex>
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
                      onVisible
                      from={{ transform: "translate3d(-10px, 0, 0)" }}
                      to={{ transform: "translate3d(10px, 0, 0)" }}
                      transform="translate3d(-10px, 0, 0)"
                      mode="forwards"
                      duration={100}
                      count={5}
                    >
                      <Button>Ripple</Button>
                    </Animate>
                    <Animate transform="translate3d(0, 30px, 0)" onVisible>
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
