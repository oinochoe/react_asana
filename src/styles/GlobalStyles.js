import { createGlobalStyle } from 'styled-components';
import { colors } from './';

// 글로벌 스타일이 필요하여 선언
export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;

    * {
      box-sizing: border-box;
      margin:0;
      padding:0;
      border:0;
    }
  }

  body {
    margin: 0;
    background: ${colors.offwhite};
    font-family: sans-serif;
  }

  button {
    border: 0;
    padding: 0;
    appearance: none;
    background: none;
    font-size: 1rem;
    cursor: pointer;
  }
`;
