const Product = require('../models/product');

exports.getIndexPage = (req, res) => {
    Product.findAll()
        .then((products) => {
            res.render('shop/index', {pageTitle: 'All Products', path: "/", products: products})
        })
        .catch(err => console.log(err))
}

exports.getProductsPage = (req, res, next) => {
    Product.findAll()
        .then((products) => {
            res.render('shop/product-list', {
                products: products,
                pageTitle: 'Shop',
                path: '/',
                hasProducts: products.length > 0,
            });
        })
        .catch(err => console.log(err))
}

exports.getProductDetailsPage = (req, res) => {
    const prodId = req.params.productId;

    Product.findByPk(prodId)
        .then((product) => {
            res.render('shop/product-details', {
                product: product,
                pageTitle: product.title,
                path: '/products',
            });
        })
        .catch(err => console.log(err))
}