const express = require('express');
const fs = require('fs'); // File system for TA01
const router = express.Router();

const shopController = require('../../controllers/shop');

router.get('/', shopController.getIndex);

router.get('/product/:productId', shopController.getProduct);

module.exports = router;