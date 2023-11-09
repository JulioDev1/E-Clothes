import styled from "styled-components";

import { Form, Input } from "../_styled"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 40px;

  background-color: white;
  width: 100%;
  height: 100%;
  padding: 36px 28px;
`;

export const Header = styled(Form)`
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr; 
  gap: 0 20px;
  grid-template-areas: 
    ". . . ."
    ". . . ."; 

  width: 100%;
`;

export const ButtonWrapper = styled.div`
  grid-column: 4;
  justify-self: end;
  align-self: end;

  width: 100%;
`;

export const DescriptionInput = styled.textarea`
  padding: 5px 10px;
  border-radius: 2px;
  border: 1px solid #cccc;
  width: 100%;
  border-radius: 5px;
  padding-left: 28px;
  height: 90px;
  font-family: "Roboto" sans-serif;
  transition: 0.2s border 0s;
  grid-column: span 2;
  :focus {
    outline: none;
    border: 1px solid #e43f6f;
    ::placeholder {
      color: #e43f6f;
    }
  }
`

export const Preview = styled.div`
  display: flex;
  column-gap: 80px;
  max-width: 900px;
  width: 100%;
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 48px 36px;
  margin: 0 auto;
  align-items: center;
`;

export const ProductInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;
  row-gap: 28px;
`
export const ProductName = styled.h3`
  font-family: "Roboto";
`
export const ProductDescription = styled.p`
  font-size: 12px;
  color: #ddd;
  font-family: "Roboto";
  flex-wrap: wrap;
  overflow-wrap: break-word;
`
export const ProductPrice = styled.span`
  font-size: 20px;
  color: #3D8F29;
  font-weight: 700;
  font-family: "Roboto";
`
export const ActionButton = styled.button`
  background-color: rgba(228, 63, 111, 0.2);
  color: rgba(228, 63, 111, 1);
  width: 100%;
  font-weight: 500;
  border-radius: 8px;
  text-transform: uppercase;
  padding: 12px;
  font-family: "Roboto";
  height: 2.5rem;
  cursor: pointer;
  outline: none;
  border: none;
`

export const ProductsFooter = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;