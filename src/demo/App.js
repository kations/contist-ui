import React, { Fragment } from 'react';
import { Wrapper, Section, Flex, Toolbar, Reset } from '../lib';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${Reset}
`;

const App = () => (
  <ThemeProvider
    theme={{
      breakpoints: {
        mb: 0,
        tb: 768,
        dt: 1024,
      },
      colors: {
        primary: '#F69A37',
        secondary: '#6F481E',
        success: '',
        danger: '',
        warning: '',
        info: '',
        light: '#fff',
        dark: '#231c20',
        grey: '',
      },
      globals: {
        wrapperWidth: '1200px',
        modalBackdropColor: 'rgba(0,0,0,0.25)',
      },
    }}
  >
    <Fragment>
      <GlobalStyle />
      <Toolbar position="sticky" top="0px" />
      <Section>
        <Wrapper maxWidth={'700px'}>
          <Flex justifyContent="center">test</Flex>
        </Wrapper>
      </Section>
      <Section>
        <Wrapper maxWidth={'700px'}>
          <Flex justifyContent="center">test</Flex>
        </Wrapper>
      </Section>
      <Section>
        <Wrapper maxWidth={'700px'}>
          <Flex justifyContent="center">test</Flex>
        </Wrapper>
      </Section>
    </Fragment>
  </ThemeProvider>
);

export default App;
