import { ProductCard } from '../components/ProductCard';
import { ProductsContainer } from "./styles";
import { Product as ProductService } from '../services/Product';
import { Product, ProductsList } from '../models/Products';

interface HomeProps {
  products: ProductsList
}

const Home: React.FC<HomeProps> = ({ products }) => {

  return (
    <>
      <ProductsContainer>
        {products.map((product: Product) => {
          return ProductCard(product);
        })}
      </ProductsContainer>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const products = await ProductService.getAll('/home')
  
  return {
    props: {
      products,
    },
  }
}

