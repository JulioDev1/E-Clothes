import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
   }

   html, body {
      height: 100%;
   }

   body {
      background-color: #F1F1F1;
   }
`;
