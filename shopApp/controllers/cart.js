const Cart = require('../models/cart');
const Product = require('../models/product');

exports.getCartPage = (req, res) => {
    res.render('shop/cart', {pageTitle: 'Cart', path: "/cart"})
}

exports.postCartPage = (req, res) => {
    const {productId} = req.body;

    Product.findById(productId, (product) => {
        Cart.addProduct(productId, product.price)
    })

    res.redirect('/cart')
}

exports.getCheckoutPage = (req, res) => {
    res.render('shop/checkout', {pageTitle: 'Checkout', path: "/checkout"})
}

exports.getOrdersPage = (req, res) => {
    res.render('shop/orders', {pageTitle: 'Orders', path: "/orders"})
}