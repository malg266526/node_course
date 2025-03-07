const express = require('express');
const path = require("node:path");

const router = express.Router();

const rootDir = require('../util/path');

const products = []

router.get("/add-product", (req, res, next) => {
    res.render('add-product', {pageTitle: "Add Product"});
})

router.post("/add-product", (req, res, next) => {
    const {title} = req.body
    products.push({title: title})

    console.log('products', products);
    res.redirect('/');
})

exports.routes = router;
exports.products = products;