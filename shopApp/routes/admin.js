const express = require('express');
const path = require("node:path");

const router = express.Router();

const rootDir = require('../util/path');

const products = []

router.get("/add-product", (req, res, next) => {
    console.log('In the middleware - Add Product');

    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
})

router.post("/add-product", (req, res, next) => {
    const {title} = req.body
    products.push({title: title})

    console.log('products', products);
    res.redirect('/');
})

exports.routes = router;
exports.products = products;