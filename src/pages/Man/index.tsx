import api from "../../services/api.js";
import { useState, useEffect } from "react";
import { ProductCard } from "../../components/ProductCard";
import { ProductsContainer, Title } from "../styles";

export const Man = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/man").then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      <Title>Man</Title>

      <ProductsContainer>
        {products.map((product) => {
          return ProductCard(product);
        })}
      </ProductsContainer>
    </div>
  );
};
