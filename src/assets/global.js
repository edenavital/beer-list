import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: ${({ theme }) => theme.typography.fontFamily};
  }
  
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
  }
`;
