import { Product } from "../../models/Products";
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
    <ProductContainer key={id}>
      <ImageContainer>
        <ProductImage></ProductImage>
      </ImageContainer>
      <Title>
        <a href="/">{name}</a>
      </Title>
      <Description>{description}</Description>
      <PriceContainer>
        <Price>R${price}</Price>
      </PriceContainer>
      <Button>Adicionar ao Carrinho</Button>
    </ProductContainer>
  );
};
