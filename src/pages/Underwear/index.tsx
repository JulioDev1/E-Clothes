import api from '../../services/api.js';
import { useState, useEffect } from 'react';
import { ProductCard } from '../../components/ProductCard'
import { ProductsContainer, Title } from "../styles";

export const Underwear = () => {
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    api.get("/underwear").then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      <Title>Underwear</Title>

      <ProductsContainer className="products--container">
        {products.map((product) => {
          return ProductCard(product);
        })}
      </ProductsContainer>
    </div>
  );
};
