import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body, div, h2, ul, li, input, form, button {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Inter', sans-serif;
  }
  ul {
    list-style: none;
  }
  input, button {
    border: none;
  }
`;

export { GlobalStyles };
