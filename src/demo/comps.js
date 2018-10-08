import React, { Fragment, Component } from "react";

import {
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

const comps = [
  {
    name: "Avatar",
    comp: (
      <Avatar
        char="UX"
        src="https://images.unsplash.com/photo-1538425679099-774ec988c02a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=60fac4b206709b25675d64ee0163a7ea&auto=format&fit=crop&w=900&q=60"
      />
    ),
    preview: `
    <Fragment>
      <Headline as="h1" marginBottom={50}>
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
        <Headline as="h1" marginBottom={50}>
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
          osition={state.position}
          handleClose={() => setState({show: !state.show})}
        >
          <Button onClick={() => setState({show: !state.show})}>Close</Button>
        </Overlay>
      </Fragment>
      )}
    </State>
    `
  }
];

export default comps;
