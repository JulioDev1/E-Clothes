import { ProductCard } from '../../components/ProductCard'
import { ProductsContainer, Title } from "../styles";
import { ProductsList, Product } from '../../models/Products';
import { Product as ProductService } from '../../services/Product';

interface ManProps {
  products: ProductsList;
}

const Man: React.FC<ManProps> = ({ products }) => {
  return (
    <>
      <Title>Man</Title>

      <ProductsContainer>
        {products.map((product: Product) => {
          return ProductCard(product);
        })}
      </ProductsContainer>
    </>
  );
};

export default Man;

export async function getStaticProps() {
  const products = await ProductService.getAll('/man')
  
  return {
    props: {
      products,
    },
  }
}
