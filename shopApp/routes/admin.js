const express = require('express');
const path = require("node:path");

const router = express.Router();

const rootDir = require('../util/path');

const products = []

router.get("/add-product", (req, res, next) => {
    res.render('add-product', {pageTitle: "Add Product", path: '/admin/add-product', activeAddProduct: true, productCSS: true, formCSS: true });
})

router.post("/add-product", (req, res, next) => {
    const {title} = req.body
    products.push({title: title})

    console.log('products', products);
    res.redirect('/');
})

exports.routes = router;
exports.products = products;