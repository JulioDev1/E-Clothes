import { ProductCard } from '../../components/ProductCard'
import { ProductsContainer } from "../_styled";
import { ProductsList, Product } from '../../models/Products';
import { Product as ProductService } from '../../services/Product';
import { Slider } from '../../components/Slider';

interface ManProps {
  products: ProductsList;
}

const Man: React.FC<ManProps> = ({ products }) => {
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

export default Man;

export async function getStaticProps() {
  const products = await ProductService.getAll('/home/?gender=man')
  
  return {
    props: {
      products,
    },
  }
}
