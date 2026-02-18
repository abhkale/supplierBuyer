const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProductById,
  getPriceHistory,
  getCategories,
} = require('../controllers/productController');

router.get('/', getProducts);
router.get('/categories', getCategories);
router.get('/:id', getProductById);
router.get('/:id/price-history', getPriceHistory);

module.exports = router;
