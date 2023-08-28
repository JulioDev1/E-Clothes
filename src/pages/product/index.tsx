import { Product as ProductModel } from '../../models/Products';
import {Product as ProductService} from '../../services/Product';

interface ProductInterface {
    product: ProductModel;
  }

const Product: React.FC<ProductInterface> = ({product}) => {
    return (
      <>
  
        <h1>salve</h1>
        <div>{product.name}</div>
     </>
    );
};

export default Product;

export async function getStaticProps() {
const product = await ProductService.get('/product/?id=2')

return {
    props: {
    product,
    },
}
}