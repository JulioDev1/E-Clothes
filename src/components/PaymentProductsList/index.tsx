import { Product, ProductsList } from "../../models/Products";
import { Title } from "../../pages/_styled";
import {
  ProductsListContainer,
  ProductsContainer,
  ProductCard,
  FreightContainer,
  PriceContainer,
  ProductName,
  ProductPrice,
  FreightPrice,
  TotalPrice
} from "./styles";

interface props {
  data: ProductsList
  totalPrice: number
}

export const PaymentProductsList: React.FC<props> = (props: props)=> {
  
  return (
    <ProductsListContainer>
      <Title>Produtos</Title>

      <ProductsContainer>
        
        {props.data.map((product: Product) => {
          return <ProductCard>
            <ProductName>
              {product.name}
            </ProductName>

            <ProductPrice>
              R$ {product.price}
            </ProductPrice>
          </ProductCard>
        })}

      </ProductsContainer>
      
        <FreightContainer>
          Frete
          <FreightPrice>R$ 30</FreightPrice>
        </FreightContainer>

        <PriceContainer>
          Preço
          <TotalPrice>R$ {props.totalPrice}</TotalPrice>
        </PriceContainer>
    </ProductsListContainer>
  );
};
