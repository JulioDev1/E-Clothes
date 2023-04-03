import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 26px 6px;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  gap: 20px;

  @media (min-width: 360px) {
    padding: 26px 16px;
  }

  @media (min-width: 480px) {
    padding: 26px;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    gap: 15px;
`

export const Input = styled.input`
    padding: 5px 10px;
    border-radius: 2px;
    border: 1px solid gray;
    width: 100%;
`

export const Button = styled.button`
    padding: 5px 10px;
    cursor: pointer;
`

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
  gap: 25px;
  padding: 10px;
  border-radius: 5px;
`;