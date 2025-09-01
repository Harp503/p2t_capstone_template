import React, { useState, useEffect } from 'react'
import { getProducts } from '../services/ProductService'
import Products from '../components/Products';

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <main className='main-content'>
      <h2>Home</h2>
      <p>ABC</p>
      <Products products={products} />
    </main>
  )
}

export default Home