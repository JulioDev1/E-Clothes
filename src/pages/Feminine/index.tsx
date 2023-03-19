import api from './../../services/api.js';
import { useState, useEffect } from 'react';
import { ProductCard } from './../../components/ProductCard'

export const Feminine = () => {
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    api.get("/woman").then((res) => setProducts(res.data))
  }, []);

  return (
    <div>
      <h1>Feminine</h1>

      <div className="products--container">{products.map((product) => {
        return ProductCard(product);
      })}</div>
    </div>
  );
};
