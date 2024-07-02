const express = require('express');
const router = express.Router();
const { getAllCommerces } = require('../controllers/commerceController');
const commerceController = require('../controllers/commerceController');

router.post('/', commerceController.createCommerce);
router.get('/', getAllCommerces);

module.exports = router;

