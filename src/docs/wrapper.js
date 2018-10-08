import { ThemeProvider } from 'styled-components';

import { DefaultTheme } from '../lib';

const Wrapper = ({ children }) => (
  <ThemeProvider theme={DefaultTheme}>{children}</ThemeProvider>
);
