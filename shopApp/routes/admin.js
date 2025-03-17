const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get("/add-product", adminController.getAddProductPage)

router.post("/add-product", adminController.postAddProductPage )

router.get("/edit-product/:productId", adminController.getEditProductPage)

router.post("/edit-product", adminController.postEditProductPage)

router.get("/products", adminController.getAdminProductsPage)

module.exports = router;