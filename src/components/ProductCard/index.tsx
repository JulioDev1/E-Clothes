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

interface Props {
  id: number;
  category: string;
  gender: string;
  name: string;
  description: string;
  promo: number;
  imgUrl: string;
  sizes: Array<object>;
  price: string;
}

export const ProductCard = ({
  id,
  name,
  gender,
  description,
  price,
  promo,
  imgUrl,
}: Props) => {
  return (
    <ProductContainer key={id}>
      <ImageContainer>
        <ProductImage></ProductImage>
      </ImageContainer>
      <Title>
        <a href="">{name}</a>
      </Title>
      <Description>{description}</Description>
      <PriceContainer>
        <Price>R${price}</Price>
      </PriceContainer>
      <Button>Adicionar ao Carrinho</Button>
    </ProductContainer>
  );
};
