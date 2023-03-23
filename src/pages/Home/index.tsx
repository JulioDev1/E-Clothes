import api from './../../services/api.js';
import { useState, useEffect } from 'react';
import { ProductCard } from './../../components/ProductCard';
import { ProductsContainer, Title } from "../styles";

export const Home = () => {
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    api.get("/home").then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      <Title>Home</Title>

      <ProductsContainer>
        {products.map((product) => {
          return ProductCard(product);
        })}
      </ProductsContainer>
    </div>
  );
};
