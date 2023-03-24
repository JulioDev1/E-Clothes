import { ProductCard } from '../../components/ProductCard'
import { ProductsContainer, Title } from "../styles";
import { ProductsList, Product } from '../../models/Products';
import { Product as ProductService } from '../../services/Product';

interface PantsProps {
  products: ProductsList;
}

const Pants: React.FC<PantsProps> = ({ products }) => {
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

export default Pants;

export async function getStaticProps() {
  const products = await ProductService.getAll('/pants')
  
  return {
    props: {
      products,
    },
  }
}


