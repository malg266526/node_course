const Product = require('../models/product');

exports.getIndexPage = (req, res) => {
    Product.fetchAll()
        .then(([rows]) => {
            res.render('shop/index', {pageTitle: 'All Products', path: "/", products: rows})
        })
        .catch(err => console.log(err))
}

exports.getProductsPage = (req, res, next) => {
    Product.fetchAll()
        .then(([rows]) => {
            res.render('shop/product-list', {
                products: rows,
                pageTitle: 'Shop',
                path: '/',
                hasProducts: rows.length > 0,
            });
        })
        .catch(err => console.log(err))
}

exports.getProductDetailsPage = (req, res) => {
    const prodId = req.params.productId;

    Product.findById(prodId)
        .then(([rows]) => {
            const product = rows[0];

            res.render('shop/product-details', {
                product: product,
                pageTitle: product.title,
                path: '/products',
            });
        })
        .catch(err => console.log(err))
}