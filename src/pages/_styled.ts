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

  font-family: "Roboto";
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  gap: 15px;
`;

export const Input = styled.input`
  padding: 5px 10px;
  border-radius: 2px;
  border: 1px solid #cccc;
  width: 100%;
  border-radius: 5px;
  padding-left: 28px;
  height: 40px;
  font-family: "Roboto" sans-serif;
  transition: 0.2s border 0s;
  :focus {
    outline: none;
    border: 1px solid #e43f6f;
    ::placeholder {
      color: #e43f6f;
    }
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  font-family: "Roboto";
  width: 100%;
  border: none;
  background-color: #e43f6f;
  color: white;
  height: 2.5rem;
`;

export const ProductsContainer = styled.div`
  background-color: white;
  padding: 20px 48px;
  border-radius: 4px;
  justify-content: center;
  display: grid;
  grid-gap: 40px 28px;
  grid-template-columns: repeat(auto-fit, minmax(280px, auto));
`;

export const ConfigContainer = styled.div`
  width: 400px;
  background-color: white;
  margin: 70px auto 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  height: 400px;
  padding: 10px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.27);
  -moz-box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.27);
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.27);
`;
