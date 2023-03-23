import api from '../../services/api.js';
import { useState, useEffect } from 'react';
import { ProductCard } from '../../components/ProductCard'
import { ProductsContainer, Title } from "../styles";

export const Pants = () => {
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    api.get("/pants").then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      <Title>Pants</Title>

      <ProductsContainer className="products--container">
        {products.map((product) => {
          return ProductCard(product);
        })}
      </ProductsContainer>
    </div>
  );
};
