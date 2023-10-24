import { Product } from "../../models/Products";
import Link from 'next/link';
import {
  Button,
  Description,
  ImageContainer,
  Price,
  PriceContainer,
  ProductContainer,
  ProductImage,
  Title,
} from "./styles";

export const ProductCard = ({
  id,
  name,
  description,
  price,
}: Product) => {
  return (
    <ProductContainer key={id} href="/product">
        <ImageContainer>
          <ProductImage></ProductImage>
        </ImageContainer>

        <Title>{name}</Title>
        
        <Description>{description}</Description>
        
        <PriceContainer>
          <Price>R${price}</Price>
        
        </PriceContainer>
        <Button>Adicionar ao Carrinho</Button>
    </ProductContainer>
  );
};
