import styled from "styled-components";

export const ProductContainer = styled.div`
  padding: 10px;
  border: #dddddd 1px solid;
  width: 240px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;
  font-family: "Roboto";
`;
  
export const ImageContainer = styled.div`
  margin-bottom: 12px;
  width: 220px;
  height: 170px;
`;
export const ProductImage = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
`;

export const Title = styled.h1`
  line-height: 20px;
  margin-bottom: 10px;
  text-align: center;
  height: 44px;
  display: flex;
  align-items: center;
  a {
    color: #adb5bd;
    text-decoration: none;
    font-size: 20px;
  }
`;

export const Description = styled.p`
  font-size: 15px;
  height: 40px;
  width: 90%;
  overflow: hidden;
  width: 100%;
  text-align: center;
`;

export const PriceContainer = styled.div`
  width: 90%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Price = styled.h2`
  color: #e43f6f;
`;

export const Button = styled.button`
  background-color: #4d34e1;
  font-size: 500;
  color: white;
  border: none;
  height: 35px;
  width: 80%;
  font-family: "Roboto";
  cursor: pointer;
  font-weight: bold;
  border-radius: 3px;
`;