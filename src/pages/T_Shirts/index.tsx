import { ProductCard } from '../../components/ProductCard'
import { ProductsContainer, Title } from "../styles";
import { ProductsList, Product } from '../../models/Products';
import { Product as ProductService } from '../../services/Product';

interface TShirtsProps {
  products: ProductsList;
}

const TShirts: React.FC<TShirtsProps> = ({ products }) => {
  return (
    <>
      <Title>T-Shirts</Title>

      <ProductsContainer>
        {products.map((product: Product) => {
          return ProductCard(product);
        })}
      </ProductsContainer>
    </>
  );
};

export default TShirts;

export async function getStaticProps() {
  const products = await ProductService.getAll('/t_shirts')
  
  return {
    props: {
      products,
    },
  }
}


