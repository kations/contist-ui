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
  Icon
} from "../lib";

export const primitives = [
  {
    name: "<Box />",
    comp: <Box width="80px" height="80px" background="primary" />,
    preview: `
      <Fragment>
        <Headline as="h3" marginBottom={50} animated>
          Box
        </Headline>
        <Flex>
          <Box width="80px" height="80px" background="primary" />
        </Flex>
      </Fragment>
    `
  },
  {
    name: "<Flex />",
    comp: (
      <Flex justifyContent="space-between" width="100%">
        <Box width="80px" height="80px" background="primary" />
        <Box width="80px" height="80px" background="primary" />
      </Flex>
    ),
    preview: `
      <Fragment>
        <Headline as="h3" marginBottom={50} animated>
          Flex
        </Headline>
        <Flex justifyContent="space-between">
          <Box width="80px" height="80px" background="primary" />
          <Box width="80px" height="80px" background="primary" />
        </Flex>
      </Fragment>
    `
  },
  {
    name: "<Grid />",
    comp: (
      <Grid min="80px" width="100%" gap="20px">
        <Box height="80px" background="primary" />
        <Box height="80px" background="primary" />
      </Grid>
    ),
    preview: `
      <Fragment>
        <Headline as="h3" marginBottom={50} animated>
          Grid
        </Headline>
        <Grid min="80px" gap="20px">
          <Box height="80px" background="primary" />
          <Box  height="80px" background="primary" />
        </Grid>
      </Fragment>
    `
  }
];

export const effects = [
  {
    name: "<Tilt />",
    comp: (
      <Tilt>
        <Box width="80px" height="80px" background="primary" />
      </Tilt>
    ),
    preview: `
      <Fragment>
        <Headline as="h3" marginBottom={50} animated>
          Tilt
        </Headline>
        <Tilt>
          <Box width="80px" height="80px" background="primary" />
        </Tilt>
      </Fragment>
    `
  },
  {
    name: "<Ripple />",
    comp: <Ripple color="rgba(0,0,0,0.3)" />,
    preview: `
      <Fragment>
        <Headline as="h3" marginBottom={50} animated>
          Ripple
        </Headline>
        <Headline as="h4" margin="30px 0 10px">Change color</Headline>
        <Box width="80px" height="80px" background="grey">
          <Ripple color="rgba(0,0,0,0.3)" />
        </Box>
        <Headline as="h4" margin="30px 0 10px">Default</Headline>
        <Box width="80px" height="80px" background="primary">
          <Ripple />
        </Box>
        <Headline as="h4" margin="30px 0 10px">Hide parent overflow</Headline>
        <Box width="80px" height="80px" background="grey">
          <Ripple color="primary" hidden />
        </Box>
      </Fragment>
    `
  },
  {
    name: "<Animate />",
    comp: (
      <Animate
        onVisible
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        mode="forwards"
        duration={500}
        delay={1000}
        count={5}
      >
        <Box width="80px" height="80px" background="primary" />
      </Animate>
    ),
    preview: `
      <Fragment>
        <Headline as="h3" marginBottom={50} animated>
          Ripple
        </Headline>
        <Headline as="h4" margin="30px 0 10px">Change color</Headline>
        <Box width="80px" height="80px" background="grey">
          <Ripple color="rgba(0,0,0,0.3)" />
        </Box>
        <Headline as="h4" margin="30px 0 10px">Default</Headline>
        <Box width="80px" height="80px" background="primary">
          <Ripple />
        </Box>
        <Headline as="h4" margin="30px 0 10px">Hide parent overflow</Headline>
        <Box width="80px" height="80px" background="grey">
          <Ripple color="primary" hidden />
        </Box>
      </Fragment>
    `
  }
];

export const ui = [
  {
    name: "<Avatar />",
    comp: (
      <Avatar
        size="84px"
        char="UX"
        src="https://images.unsplash.com/photo-1538425679099-774ec988c02a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=60fac4b206709b25675d64ee0163a7ea&auto=format&fit=crop&w=900&q=60"
      />
    ),
    preview: `
    <Fragment>
      <Headline as="h3" marginBottom={50} animated>
        Avatar
      </Headline>
      <Flex justifyContent="space-between" flexDirection={{mb: 'column', tb: 'row'}}>
        <Flex>
          <Avatar />
          <Avatar marginLeft="10px" borderRadius={0} char="UX" />
          <Avatar
            marginLeft="10px"
            borderRadius={0}
            src="https://images.unsplash.com/photo-1538425679099-774ec988c02a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=60fac4b206709b25675d64ee0163a7ea&auto=format&fit=crop&w=900&q=60"
          />
          <Avatar
            marginLeft="10px"
            char="UX"
            src="https://images.unsplash.com/photo-1538425679099-774ec988c02a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=60fac4b206709b25675d64ee0163a7ea&auto=format&fit=crop&w=900&q=60"
          />
          <Avatar
            size="44px"
            marginLeft="10px"
            char="UX"
            src="https://images.unsplash.com/photo-1538425679099-774ec988c02a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=60fac4b206709b25675d64ee0163a7ea&auto=format&fit=crop&w=900&q=60"
          />
        </Flex>
        <Flex marginTop={{mb: 30, tb: 0}}>
          <Avatar boxShadow="0 0 0 2px #FFF" />
          <Avatar
            marginLeft="-5px"
            boxShadow="0 0 0 2px #FFF"
            char="UX"
          />
          <Avatar
            marginLeft="-5px"
            boxShadow="0 0 0 2px #FFF"
            src="https://images.unsplash.com/photo-1538425679099-774ec988c02a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=60fac4b206709b25675d64ee0163a7ea&auto=format&fit=crop&w=900&q=60"
          />
          <Avatar
            marginLeft="-5px"
            boxShadow="0 0 0 2px #FFF"
            char="UX"
            src="https://images.unsplash.com/photo-1538425679099-774ec988c02a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=60fac4b206709b25675d64ee0163a7ea&auto=format&fit=crop&w=900&q=60"
          />
        </Flex>
      </Flex>

      </Fragment>
    `
  },
  {
    name: "<Overlay />",
    comp: <Button>Overlay</Button>,
    preview: `

      <State
        initialState={{ show: false, position: undefined, full: false, from: undefined, fullHeight: false }}>
        {({
          state,
          setState,
        }) => (
      <Fragment>
        <Headline as="h3" marginBottom={50} animated>
          Overlay
        </Headline>
        <Grid gap="10px">
          <Button onClick={() =>
            setState({show: !state.show, position: 'center', full: false, from: undefined, fullHeight: false})}
          >
            Show Overlay
          </Button>
          <Button onClick={() =>
            setState({show: !state.show, position: 'center', fullHeight: false, full: false, from: {transform: "translate3d(0, 0, 0) scale(0)", opacity: 0}})}
          >
            Change Animation
          </Button>
          <Button onClick={() =>
            setState({show: !state.show, position: 'left', full: false, fullHeight: true, from: { transform: "translate3d(-300px, 0, 0)" }})}
          >
            As sidebar
          </Button>
          <Button onClick={() =>
            setState({show: !state.show, position: 'center', full: true, fullHeight: false, from: undefined})}
          >
            Full Overlay
          </Button>
        </Grid>
        <Overlay
          visible={state.show}
          full={state.full}
          position={state.position}
          from={state.from}
          fullHeight={state.fullHeight}
          handleClose={() => setState({show: !state.show})}
        >
          <Button onClick={() => setState({show: !state.show})}>Close</Button>
        </Overlay>
      </Fragment>
      )}
    </State>
    `
  },
  {
    name: "<Progress />",
    comp: <Progress size={130} progress={60} />,
    preview: `

      <State
        initialState={{ progress: 60 }}>
        {({
          state,
          setState,
        }) => (
      <Fragment>
        <Headline as="h3" marginBottom={50} animated>
          Progress
        </Headline>
        <Progress size={130} progress={60} />
        <Progress size={200} />
        <Progress size={130} progress={state.progress} />
        <Progress size={80} progress={30} />
        <Progress size={30} />
        <Button onClick={() =>
          setState({progress: Math.floor(Math.random() * 100) + 1  })}
        >
          Random value
        </Button>
      </Fragment>
      )}
    </State>
    `
  },
  {
    name: "<Icon />",
    comp: <Icon size={50} type="burger" />,
    preview: `
    <State initialState={{ type: "burger" }}>
      {({ state, setState }) => (
        <Fragment>
        <Headline as="h3" marginBottom={50} animated>
          Icon
        </Headline>
          <Icon  lineWidth={2} size={50} type={state.type} marginBottom="50px" />
          <Grid min="80px" gap="20px">
          <Button
            onClick={() =>
              setState({
                type: "burger"
              })
            }
          >
            Burger
          </Button>
          <Button
            onClick={() =>
              setState({
                type: "close"
              })
            }
          >
            Close
          </Button>
          <Button
            onClick={() =>
              setState({
                type: "arrow-top"
              })
            }
          >
            Arrow top
          </Button>
          <Button
            onClick={() =>
              setState({
                type: "arrow-right"
              })
            }
          >
            Arrow right
          </Button>
          <Button
            onClick={() =>
              setState({
                type: "arrow-down"
              })
            }
          >
            Arrow down
          </Button>
          <Button
            onClick={() =>
              setState({
                type: "arrow-left"
              })
            }
          >
            Arrow left
          </Button>
          <Button
            onClick={() =>
              setState({
                type: "search"
              })
            }
          >
            Search
          </Button>
          </Grid>
        </Fragment>
      )}
    </State>
    `
  }
];
