import styled from "styled-components";

export const Title = styled.h1`
  line-height: 15px;
  margin-bottom: 10px;
  a {
    color: #adb5bd;
    text-decoration: none;
    font-size: 20px;
  }
`;
export const Price = styled.h2`
  color: #e43f6f;
`;
export const PriceContainer = styled.div`
  width: 90%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductContainer = styled.div`
  padding: 16px;
  border: #dddddd 1px solid;
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Roboto";
`;
export const Button = styled.button`
  background-color: #4d34e1;
  font-size: 500;
  color: white;
  border: none;
  height: 60px;
  width: 100%;
  font-family: "Roboto";
  cursor: pointer;
  font-weight: bold;
`;
export const DescriptionContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;
export const Description = styled.p`
  font-size: 15px;
  height: 50px;
  width: 90%;
  overflow: hidden;
  width: 100%;
`;

export const ImageContainer = styled.div`
  margin-bottom: 12px;
  width: 260px;
  height: 250px;
`;
export const ProductImage = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
`;
