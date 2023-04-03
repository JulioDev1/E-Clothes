import { ProductCard } from '../../components/ProductCard'
import { ProductsContainer } from "../_styled";
import { ProductsList, Product } from '../../models/Products';
import { Product as ProductService } from '../../services/Product';
import { Slider } from '../../components/Slider';

interface PantsProps {
  products: ProductsList;
}

const Pants: React.FC<PantsProps> = ({ products }) => {
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

export default Pants;

export async function getStaticProps() {
  const products = await ProductService.getAll('/home/?category=pants')
  
  return {
    props: {
      products,
    },
  }
}
