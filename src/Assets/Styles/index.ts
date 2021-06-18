import {createGlobalStyle} from "styled-components"


export const GlobalStyle = createGlobalStyle`
  :root{
    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    background-color: rgba(248, 248, 248, 1);
  }

  #root{
    display: flex;
    flex-direction: column;
  }

  body,
  input,
  button,
  textarea {
    font: 500 1,6rem Roboto;
  }

  @media (min-width: 700px) {
    :root{
      font-size: 62.5%;
  }
}
` 