import api from "./../../services/api.js";
import { useState, useEffect } from "react";
import { ProductCard } from "./../../components/ProductCard";
import { ProductsContent } from "../../global/styled";

export const Masculine = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/man").then((res) => setProducts(res.data));
  }, []);

  return (
    <>
      <ProductsContent>
        {products.map((product) => {
          return ProductCard(product);
        })}
      </ProductsContent>
    </>
  );
};
