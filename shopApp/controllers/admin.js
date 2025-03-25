const Product = require("../models/product");


exports.getAdminProductsPage = (req, res) => {
    req.user.getProducts()
        .then(products => {
            res.render('admin/products', {pageTitle: 'Admin Products', path: "/admin/products", products: products})
        })
        .catch(err => console.log(err))
}

exports.getAddProductPage = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: "Add Product",
        path: '/admin/add-product',
        editing: false
    });
}

exports.postAddProductPage = (req, res, next) => {
    const {title, imageUrl, description, price} = req.body;
    req.user.createProduct({
        title: title,
        imageUrl: imageUrl,
        description: description,
        price: price,
    }).then(result => {
        console.log('It\'s okay');
        res.redirect('/admin/products');
    }).catch(err => console.log(err));
}

exports.getEditProductPage = (req, res, next) => {
    const {edit} = req.query;
    const editMode = edit === "true";

    if (!editMode) {
        return res.redirect('/');
    }

    const {productId} = req.params;

    Product.findByPk(productId).then(product => {
        if (!product) {
            return res.redirect('/');
        }

        res.render('admin/edit-product', {
            pageTitle: "Edit Product",
            path: '/admin/edit-product',
            editing: editMode,
            product: product
        });
    })
}

exports.postEditProductPage = (req, res) => {
    const {productId, title, imageUrl, description, price} = req.body;

    Product.findByPk(productId).then(product => {
        product.title = title;
        product.imageUrl = imageUrl;
        product.description = description;
        product.price = price;
        return product.save()
    })
        .then(result => {
            res.redirect('/admin/products');
            console.log('Product updated successfully');
        })
        .catch(err => console.log(err));
}

exports.postDeleteProduct = (req, res) => {
    const {productId} = req.body;

    Product.findByPk(productId)
        .then(product => {
            return product.destroy();
        })
        .then(() => {
            res.redirect('/admin/products')
        })
        .catch(err => console.log(err));
}