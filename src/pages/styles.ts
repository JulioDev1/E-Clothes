import styled from "styled-components";

export const Title = styled.h1`
    text-align: center;
`

export const ProductsContainer = styled.div`
  width: 1000px;
  background-color: white;
  margin: 70px auto 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 5px;
  padding: 10px;
  border-radius: 5px;
  grid-auto-flow: row;
  grid-template-areas:
    ". . . ."
    ". . . ."
    ". . . .";
`;

export const ConfigContainer = styled.div`
  width: 1000px;
  background-color: white;
  margin: 70px auto 0 auto;
  display: flex;
  justify-content: center;
  gap: 5px;
  padding: 10px;
  border-radius: 5px;
`;