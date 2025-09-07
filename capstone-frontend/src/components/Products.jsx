import React, { useState } from "react";
import ProductCard from "./ProductCard";

const allProducts = [
  {
    id: 1,
    name: "Brown leather handbag",
    category: "Purse",
    price: 499,
    description: "Elegant brown leather handbag perfect for any occasion.",
    image: "https://res.cloudinary.com/demo/image/upload/brown-handbag.jpg",
  },
  {
    id: 2,
    name: "Black Leather Handbag",
    category: "Purse",
    price: 599,
    description: "Stylish black leather handbag with ample space.",
    image: "https://res.cloudinary.com/demo/image/upload/black-handbag.jpg",
  },
  {
    id: 3,
    name: "Navy Classic Purse",
    category: "Purse",
    price: 199,
    description: "Classic navy purse made from premium materials.",
    image: "https://res.cloudinary.com/demo/image/upload/navy-purse.jpg",
  },
  {
    id: 4,
    name: "Tan Crossbody Bag",
    category: "Purse",
    price: 249,
    description: "Comfortable and chic tan crossbody bag for daily use.",
    image: "https://res.cloudinary.com/demo/image/upload/tan-crossbody.jpg",
  },
  {
    id: 5,
    name: "Emerald Green Crossbody",
    category: "Purse",
    price: 349,
    description: "Sleek emerald green crossbody bag with modern design.",
    image: "https://res.cloudinary.com/demo/image/upload/emerald-green-crossbody.jpg",
  },
  {
    id: 6,
    name: "Green Tote Purse",
    category: "Purse",
    price: 299,
    description: "Spacious green tote purse for style and utility.",
    image: "https://res.cloudinary.com/demo/image/upload/green-tote.jpg",
  },
];

function Products() {
  const [category, setCategory] = useState("All");

  const categories = ["All", "Purse"];

  const filteredProducts =
    category === "All" ? allProducts : allProducts.filter(p => p.category === category);

  return (
    <div>
      <h2>Product Catalog</h2>
      <div>
        <label>Filter by Category: </label>
        <select onChange={e => setCategory(e.target.value)} value={category}>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
