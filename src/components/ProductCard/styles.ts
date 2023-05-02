import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 100%;
  max-width: 320px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  padding: 10px;
  border: #dddddd 1px solid;
  border-radius: 4px;
  font-family: "Roboto";
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.01);
  }
`;
  
export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
`;

export const ProductImage = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
`;

export const Title = styled.h1`
  line-height: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  margin: 6px 0;

  a {
    color: #adb5bd;
    text-decoration: none;
    font-size: 1.5rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  height: 55px;
  width: 90%;
  overflow: hidden;
  width: 100%;
  text-align: center;
`;

export const PriceContainer = styled.div`
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
  width: 80%;
  padding: 12px 0;
  font-family: "Roboto";
  cursor: pointer;
  font-weight: bold;
  border-radius: 4px;
`;