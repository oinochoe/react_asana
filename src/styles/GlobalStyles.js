import { createGlobalStyle } from 'styled-components';
import { colors } from './';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;

    * {
      box-sizing: inherit;
    }
  }

  body {
    background: ${colors.gray05};
    font-family: sans-serif;
    margin: 0;
  }

  button {
    appearance: none;
    background: none;
    border: 0;
    cursor: pointer;
    font-size: 1rem;
    padding: 0;
  }
`;
