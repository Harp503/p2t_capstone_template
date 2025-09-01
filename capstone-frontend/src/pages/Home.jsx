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
    <main className="d-flex flex-column align-items-center">
      {/* Hero Section */}
      <section className="w-100 bg-gradient text-white text-center py-5 px-3 shadow rounded-bottom">
        <h1 className="display-4 fw-bold mb-3">
          Welcome to Our Store
        </h1>
        <p className="lead mx-auto mb-4" style={{ maxWidth: '700px' }}>
          Discover amazing products, shop with ease, and enjoy fast delivery.
        </p>
        <a
          href="#products"
          className="btn btn-light btn-lg rounded-pill px-4 py-2 fw-semibold shadow-sm"
        >
          Shop Now
        </a>
      </section>

      {/* Featured Products */}
      <section id="products" className="container text-center py-5">
        <h2 className="fw-bold mb-4">Featured Products</h2>
        {products.length > 0 ? (
          <Products products={products} />
        ) : (
          <p className="text-muted">Loading products...</p>
        )}
      </section>

      {/* Footer Teaser */}
      <section className="w-100 bg-light py-5 text-center mt-5 rounded-top">
        <h3 className="h2 fw-semibold mb-3">Join Our Community</h3>
        <p className="text-secondary mb-4">
          Get updates on the latest deals and new arrivals.
        </p>
        <button className="btn btn-primary btn-lg rounded-pill px-4 py-2 fw-medium">
          Sign Up
        </button>
      </section>
    </main>
  )
}

export default Home
