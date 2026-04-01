const express = require('express');
const router = express.Router();

const { getProcessedProducts } = require('../controllers/productController');

router.get('/products', getProcessedProducts);

module.exports = router;