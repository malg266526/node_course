const express = require('express');
const path = require('path');

const adminData =  require('./admin');

const router = express.Router();

router.get("/", (req,res,next) => {
    const products = adminData.products;

    console.log('Show: products ', products);

    res.render('shop', {products: products, docTitle: 'Shop'})
})

module.exports = router;