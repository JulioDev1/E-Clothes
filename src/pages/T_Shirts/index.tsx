import api from '../../services/api.js';
import { useState, useEffect } from 'react';
import { ProductCard } from '../../components/ProductCard'
import { ProductsContainer, Title } from "../styles";

export const T_Shirts = () => {
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    api.get("/t_shirt").then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      <Title>T-Shirts</Title>

      <ProductsContainer className="products--container">
        {products.map((product) => {
          return ProductCard(product);
        })}
      </ProductsContainer>
    </div>
  );
};
