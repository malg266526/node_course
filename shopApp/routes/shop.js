const express = require('express');

const shopController = require('../controllers/shop');
const cartsController = require("../controllers/cart");

const router = express.Router();

router.get("/", shopController.getIndexPage )

router.get('/products', shopController.getProductsPage );

// router.get('/product')

router.get('/cart', cartsController.getCartPage )

router.get('/checkout', cartsController.getCheckoutPage )

router.get('/orders', cartsController.getOrdersPage )

module.exports = router;