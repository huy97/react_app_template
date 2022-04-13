import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body{
    margin: 0;
    padding: 0;
  }

  #root{
    min-height: 100vh;
    height: 100%;
  }
`;
