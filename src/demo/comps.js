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
  Overlay
} from "../lib";

export const primitives = [
  {
    name: "Box",
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
    name: "Flex",
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
    name: "Grid",
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

export const ui = [
  {
    name: "Avatar",
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
    name: "Overlay",
    comp: <Button>Overlay</Button>,
    preview: `

      <State
        initialState={{ show: false, position: undefined, full: false }}>
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
            setState({show: !state.show, position: 'center', full: false})}
          >
            Show Overlay
          </Button>
          <Button onClick={() =>
            setState({show: !state.show, position: 'left', full: false})}
          >
            Left Overlay
          </Button>
          <Button onClick={() =>
            setState({show: !state.show, position: 'center', full: true})}
          >
            Full Overlay
          </Button>
        </Grid>
        <Overlay
          visible={state.show}
          full={state.full}
          position={state.position}
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
    name: "Progress",
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
  }
];
