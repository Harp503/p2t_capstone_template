require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3500;
const dbUrl = process.env.DB_URL;

// Connect to MongoDB
mongoose.connect(dbUrl)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

const paymentRoutes = require('./routes/paymentRoutes');
app.use('/api/payment', paymentRoutes);


// Cart routes
const cartRoutes = require('./routes/cartRoutes');
app.use('/api/cart', cartRoutes);


app.get('/', (req, res) => {
    res.send('Welcome to the Capstone Backend API');    
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
