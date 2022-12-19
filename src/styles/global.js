import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    text-decoration: none;
  }
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background-color 1000ms linear;
    font-family: 'Space Mono', monospace;
    font-size: 16px;
    font-weight: 500;
  }
`
