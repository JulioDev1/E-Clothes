import api from '../../services/api.js';
import { useState, useEffect } from 'react';
import { ProductCard } from '../../components/ProductCard'
import { ProductsContainer, Title } from "../styles";

export const Woman = () => {
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    api.get("/woman").then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      <Title>Woman</Title>

      <ProductsContainer className="products--container">
        {products.map((product) => {
          return ProductCard(product);
        })}
      </ProductsContainer>
    </div>
  );
};
