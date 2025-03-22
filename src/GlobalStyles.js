import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Kumbh+Sans:wght@100..900&display=swap");
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }
  html{ 
    font-size: 62.5%;
  }

  body{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background: linear-gradient(180deg, #B068E9 0%, #6463E7 100%);
    font-family:"kumbh Sans", sans-serif
  }
`;

export default GlobalStyle;
