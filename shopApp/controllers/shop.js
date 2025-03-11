const Product = require('../models/product');

exports.getIndexPage = (req, res) => {
    Product.fetchAll((products) => {
        res.render('shop/index', {pageTitle: 'All Products', path: "/", products: products,})
    })
}

exports.getProductsPage = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/product-list', {
            products: products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    })


}