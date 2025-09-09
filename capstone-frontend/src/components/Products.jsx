import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "../services/productService"; 
import { useCartStore } from "../store/CartStore";

function Products() {
  const [category, setCategory] = useState("All");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //AddItem from cart store
  const addToCart = useCartStore((state) => state.addItem);

  useEffect(() => {
    getProducts()
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load products");
        setLoading(false);
      });
  }, []);

  
  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = category === "All" ? products : products.filter(p => p.category === category);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Product Catalog</h2>
      <div>
        <label htmlFor="category-select">Filter by Category: </label>
        <select id="category-select" onChange={e => setCategory(e.target.value)} value={category}>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "1rem" }}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
