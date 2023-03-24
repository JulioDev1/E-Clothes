import styled from "styled-components";

export const ProductsContainer = styled.div`
  background-color: white;
  padding: 86px 48px;
  border-radius: 4px;
  justify-content: center;
  display: grid;
  grid-gap: 40px 28px;
  grid-template-columns: repeat(auto-fit, minmax(280px, auto));
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