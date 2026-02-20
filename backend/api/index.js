require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

// Connect DB
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));
app.use('/api/supplier', require('./routes/supplier'));
app.use('/api/buyer', require('./routes/buyer'));

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server running on Vercel 🚀' });
});

app.use(errorHandler);

module.exports = app;