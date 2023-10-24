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
        {products.map((product: Product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            description={product.description}
            name={product.name}
            price={product.price}
            gender={product.gender}
            promo={product.promo}
            sizes={product.sizes}
            thumb_url={product.thumb_url}
            brand={product.brand}
            images_url={product.images_url}
            category_id={product.category_id}
            category_name={product.category_name}
            sub_category={product.sub_category}
          />
        ))}
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
