import { ProductCard } from '../../components/ProductCard'
import { ProductsContainer } from "../_styled";
import { ProductsList, Product } from '../../models/Products';
import { Product as ProductService } from '../../services/Product';
import { Slider } from '../../components/Slider';

interface UnderwearProps {
  products: ProductsList;
}

const Underwear: React.FC<UnderwearProps> = ({ products }) => {
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

export default Underwear;

export async function getStaticProps() {
  const products = await ProductService.getAll('/home/?category=underwear')
  
  return {
    props: {
      products,
    },
  }
}
