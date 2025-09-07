const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  categories: [{ type: String }],  // Array of category names
  image: { type: String },          // URL or image path
  description: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);