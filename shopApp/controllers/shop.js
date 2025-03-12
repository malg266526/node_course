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
        });
    })
}

exports.getProductDetailsPage = (req, res) => {
    const prodId = req.params.productId;

    Product.findById(prodId, product => {
        console.log("found product: ", product);

        res.render('shop/product-details', {
            product: product,
            pageTitle: product.title,
            path: '/products',
        });
    })

}