import { ProductCard } from '../../components/ProductCard'
import { ProductsContainer } from "../styles";
import { ProductsList, Product } from '../../models/Products';
import { Product as ProductService } from '../../services/Product';
import { Slider } from '../../components/Slider';

interface TShortsProps {
  products: ProductsList;
}

const TShorts: React.FC<TShortsProps> = ({ products }) => {
  return (
    <>
      <Slider />

      <ProductsContainer>
        {products.map((product: Product) => {
          return ProductCard(product);
        })}
      </ProductsContainer>
    </>
  );
};

export default TShorts;

export async function getStaticProps() {
  const products = await ProductService.getAll('/t_shorts')
  
  return {
    props: {
      products,
    },
  }
}
