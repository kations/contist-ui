import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
      box-sizing: border-box;
  }

  * {
      -webkit-tap-highlight-color: rgba(255,255,255,0);
      -webkit-tap-highlight-color: transparent;
      box-sizing: inherit;
  }

  *:before,
  *:after {
      box-sizing: inherit;
  }


  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
      margin: 0;
      font-size: 1rem;
      font-weight: 400;
  }

  a {
      text-decoration: none;
      color: inherit;
  }

  a:focus {
      outline: 0;
  }

  input,
  fieldset {
      appearance: none;
      border: 0;
      padding: 0;
      margin: 0;
      min-width: 0;
      font-size: 1rem;
      font-family: inherit;
  }

  input:focus {
      outline: 0;
  }

  input[type="number"] {
      -moz-appearance: textfield;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
      appearance: none;
  }

  svg {
      display: inline-flex;
  }

  img {
      max-width: 100%;
      display: block;
  }
`;
