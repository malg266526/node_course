const express = require('express');

const router = express.Router();

router.get("/add-product", (req,res,next) => {
    console.log('In the middleware - Add Product');
    // res.send('<h1>Hello from Add Product</h1>');
    res.send('<form action="/product" method="post"><input type="text" name="title" ><button type="submit">Add product</button>  </form> ')
})

router.post("/product", (req,res,next) => {
    console.log('In the middleware - Product');

    console.log('body', req.body);
    res.redirect('/');
})

module.exports = router