import { ProductCard } from '../components/ProductCard';
import { ProductsContainer } from "./_styled";
import { Product as ProductService } from '../services/Product';
import { Product, ProductsList } from '../models/Products';
import { Slider } from '../components/Slider';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react'

const Home: React.FC = () => {
  const category = useSelector((state: any) => state.category);
  const [ products, setProducts ] = useState<ProductsList>([]);

  async function getProducts() {
    if(category.name == " ") {
      const products = await ProductService.getAll('/home');
      setProducts(products);
    } else {
      const products = await ProductService.getAll(`/home/?category=${category.name}`);
      setProducts(products);
    }
  }

  useEffect(() => {
    getProducts();
  }, [category])
  
  return (
    <>
      <Slider />
      <ProductsContainer>
        {products.map((product: Product) => {
          return ProductCard(product);
        })}
      </ProductsContainer>
    </>
  )
}

export default Home


