const express = require('express');
const path = require("node:path");

const router = express.Router();

router.get("/add-product", (req,res,next) => {
    console.log('In the middleware - Add Product');

    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
})

router.post("/add-product", (req,res,next) => {
    console.log('In the middleware - Product');

    console.log('body', req.body);
    res.redirect('/');
})

module.exports = router