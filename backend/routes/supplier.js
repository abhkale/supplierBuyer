const express = require('express');
const router = express.Router();
const {
  getSupplierProfile,
  getSupplierProducts,
  updateProductPrice,
  getSupplierPriceHistory,
  addProductToSupplier,
} = require('../controllers/supplierController');
const { protect, authorize } = require('../middleware/auth');

// All routes require authentication and supplier role
router.use(protect);
router.use(authorize('supplier'));

router.get('/profile', getSupplierProfile);
router.get('/products', getSupplierProducts);
router.post('/products/:productId/price', updateProductPrice);
router.post('/products/:productId/add', addProductToSupplier);
router.get('/price-history', getSupplierPriceHistory);

module.exports = router;
