import styled from "styled-components";

export const ProductsListContainer = styled.div`
  width: 100%;
  height: 100%
  display: flex !important;
  display: flex !important;
  display: flex !important;
  flex-direction: column;
  padding: 10px;
  border-radius: 4px;
  font-family: "Roboto";
  transition: all 0.2s;
  text-decoration: none;
`;

export const ProductsContainer = styled.div`
  width: 100%;
  height: 240px;
  margin-top: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-bottom: 2px solid rgba(0, 0, 0, .2);
  overflow-y: auto;
  padding: 0 5px;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
      background: transparent;
  }

  &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, .6);
  }
`

export const ProductCard = styled.div`
  min-height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 30px;
`

export const ProductName = styled.p`
  font-size: 18px;
  font-weight: 600;
`

export const FreightContainer = styled.div`
  width: 100%;
  display: flex;
  font-weight: 600;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0;
`
  
export const PriceContainer = styled.div`
  width: 100%;
  display: flex;
  font-weight: 600;
  flex-direction: row;
  justify-content: space-between
`

export const ProductPrice = styled.div`
  opacity: 0.8
`

export const FreightPrice = styled.p`
  font-weight: 500;
`

export const TotalPrice = styled.p`
  font-size: 24px;
  font-weight: 600;
`