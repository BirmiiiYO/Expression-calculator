import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    text-decoration: none;
  }
  body {
    background-color: ${(props) => props.theme.colors.backgroundColor};
    color: ${(props) => props.theme.colors.text};
    transition: background-color 1000ms linear;
    font-family: 'Space Mono', monospace;
    font-size: 16px;
    font-weight: 600;
    max-width:800px;
    margin: 5% auto;
    padding:20px;
    border-radius:10px;
    min-heigth:700px;
    border: 2px solid ${(props) => props.theme.colors.text};
  }
`;
