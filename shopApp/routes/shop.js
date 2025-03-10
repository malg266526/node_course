const express = require('express');
const path = require('path');

const adminData =  require('./admin');

const router = express.Router();

router.get("/", (req,res,next) => {
    const products = adminData.products;

    console.log('Show: products ', products);

    res.render('shop', {products: products, pageTitle: 'Shop', path: '/', hasProducts: products.length > 0, activeShop: true, productCSS: true});
})

module.exports = router;