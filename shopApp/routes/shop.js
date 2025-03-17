const express = require('express');

const shopController = require('../controllers/shop');
const cartsController = require("../controllers/cart");

const router = express.Router();

router.get("/", shopController.getIndexPage )

router.get('/products', shopController.getProductsPage );

router.get('/products/:productId', shopController.getProductDetailsPage)

router.get('/cart', cartsController.getCartPage )

router.post('/cart', cartsController.postCartPage )

router.get('/checkout', cartsController.getCheckoutPage )

router.get('/orders', cartsController.getOrdersPage )

router.post('/cart-delete-item', cartsController.postCartDeleteProductPage)

module.exports = router;