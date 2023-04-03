import { ProductCard } from '../../components/ProductCard'
import { ProductsContainer } from "../_styled";
import { ProductsList, Product } from '../../models/Products';
import { Product as ProductService } from '../../services/Product';
import { Slider } from '../../components/Slider';

interface TShirtsProps {
  products: ProductsList;
}

const TShirts: React.FC<TShirtsProps> = ({ products }) => {
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

export default TShirts;

export async function getStaticProps() {
  const products = await ProductService.getAll('/home/?category=t_shirts')
  
  return {
    props: {
      products,
    },
  }
}
