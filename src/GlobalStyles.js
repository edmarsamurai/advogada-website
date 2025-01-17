// src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
  
  p {
    margin: 0;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
`;

export default GlobalStyles;
