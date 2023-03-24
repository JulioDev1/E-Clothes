import { ProductCard } from '../../components/ProductCard'
import { ProductsContainer, Title } from "../styles";
import { ProductsList, Product } from '../../models/Products';
import { Product as ProductService } from '../../services/Product';

interface UnderwearProps {
  products: ProductsList;
}

const Underwear: React.FC<UnderwearProps> = ({ products }) => {
  return (
    <>
      <Title>Underwear</Title>

      <ProductsContainer>
        {products.map((product: Product) => {
          return ProductCard(product);
        })}
      </ProductsContainer>
    </>
  );
};

export default Underwear;

export async function getStaticProps() {
  const products = await ProductService.getAll('/underwear')
  
  return {
    props: {
      products,
    },
  }
}


