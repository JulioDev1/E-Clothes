import { ProductCard } from '../../components/ProductCard'
import { ProductsContainer } from "../_styled";
import { ProductsList, Product } from '../../models/Products';
import { Product as ProductService } from '../../services/Product';
import { Slider } from '../../components/Slider';

interface WomanProps {
  products: ProductsList;
}

const Woman: React.FC<WomanProps> = ({ products }) => {
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

export default Woman;

export async function getStaticProps() {
  const products = await ProductService.getAll('/home/?gender=woman')
  
  return {
    props: {
      products,
    },
  }
}
