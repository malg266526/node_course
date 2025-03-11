const Product = require('../models/product');

exports.getAddProductPage = (req, res, next) => {
    res.render('add-product', {
        pageTitle: "Add Product",
        path: '/admin/add-product',
        activeAddProduct: true,
        productCSS: true,
        formCSS: true
    });
}

exports.postAddProductPage = (req, res, next) => {
    const {title} = req.body
    const product = new Product(title)
    product.save()

    res.redirect('/');
}

exports.getProductsPage = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop', {
            products: products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    })


}