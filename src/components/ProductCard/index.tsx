import {
  Button,
  Description,
  DescriptionContainer,
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
    <ProductContainer>
      <ImageContainer>
        <ProductImage></ProductImage>
      </ImageContainer>
      <Title>
        <a href="">{name}</a>
      </Title>
      <DescriptionContainer>
        <Description>{description}</Description>
      </DescriptionContainer>
      <PriceContainer>
        <Price>R${price}</Price>
      </PriceContainer>
      <Button>Adicionar ao Carrinho</Button>
    </ProductContainer>
  );
};
