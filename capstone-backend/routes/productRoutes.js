const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products (optionally filter by category with query param)
router.get('/', async (req, res) => {
  try {
    const category = req.query.category;
    let filter = {};
    if (category) {
      filter.categories = category; // Filter products by category string
    }
     const products = await Product.find(filter);
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Server error' });
  }
});
// Add a new product (admin only - implement role check later)
router.post('/', async (req, res) => {
  try {
    const { name, price, categories, image, description } = req.body;
    const product = new Product({ name, price, categories, image, description });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ message: 'Server error' });
  }
});
// Delete a product by ID (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await Product.findByIdAndDelete(id);
    res.json({ message: 'Product deleted' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;