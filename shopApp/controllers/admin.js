const Product = require("../models/product");

exports.getAdminProductsPage = (req, res) => {
    Product.fetchAll((products) => {
        res.render('admin/products', {pageTitle: 'Admin Products', path: "/admin/products", products: products})
    })
}

exports.getAddProductPage = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: "Add Product",
        path: '/admin/add-product',
        editing: false
    });
}

exports.getEditProductPage = (req, res, next) => {
    const {edit} = req.query;
    const editMode = edit === "true";

    if (!editMode) {
        return res.redirect('/');
    }

    const {productId} = req.params;

    Product.findById(productId, (product) => {
        if (!product) {
            return res.redirect('/');
        }

        console.log('product', product)

        res.render('admin/edit-product', {
            pageTitle: "Edit Product",
            path: '/admin/edit-product',
            editing: editMode,
            product: product
        });
    })
}

exports.postEditProductPage = (req, res) => {
    const {productId, title, imageUrl, description, price } = req.body;
    const updatedProduct = new Product(productId, title, imageUrl, description, price);
    updatedProduct.save()
    res.redirect('/admin/products')
}

exports.postAddProductPage = (req, res, next) => {
    const {title, imageUrl, description, price} = req.body

    console.log('add product: ', title, imageUrl, description, price);

    const product = new Product(null, title, imageUrl, description, price);
    product.save()

    res.redirect('/');
}