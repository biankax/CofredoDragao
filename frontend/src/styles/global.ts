import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Minecraft";
    src: url("/fonts/Minecraft.otf") format("opentype");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Minecraft";
    src: url("/fonts/Minecraft-Bold.otf") format("opentype");
    font-weight: 700;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
  }

  body {
  margin: 0;
  background-color:  #FF0000;
  color: #F5F5F5;
  }
`;