const express = require('express');
const router = express.Router();
const {
  comparePrices,
  searchProducts,
} = require('../controllers/buyerController');
const { protect, authorize } = require('../middleware/auth');

// All routes require authentication and buyer role
router.use(protect);
router.use(authorize('buyer'));

router.get('/search', searchProducts);
router.get('/products/:id/compare', comparePrices);

module.exports = router;
