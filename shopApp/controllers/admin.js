const Product = require("../models/product");

exports.getAdminProductsPage = (req, res) => {
    Product.fetchAll((products) => {
        res.render('admin/products', {pageTitle: 'Admin Products', path: "/admin/products", products: products})
    })
}

exports.getAddProductPage = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: "Add Product",
        path: '/admin/add-product',
    });
}

exports.postAddProductPage = (req, res, next) => {
    const {title, imageUrl, description, price} = req.body

    console.log('add product: ', title, imageUrl, description, price);

    const product = new Product(title, imageUrl, description, price);
    product.save()

    res.redirect('/');
}