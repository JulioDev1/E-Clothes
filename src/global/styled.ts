import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
 *{
    padding:0;
    margin:0;
    box-sizing:border-box;
 }

 html, body, #root{
    height:100%;
 }
 body{
    background-color:#F1F1F1;
 }
 `;
export const ProductsContent = styled.div`
  width: 96%;
  background-color: white;
  margin: 70px auto 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 60px;
  padding: 32px;
  grid-auto-flow: row;
  grid-template-areas:
    ". . ."
    ". . ."
    ". . .";
`;
