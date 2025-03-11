const products = []

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
    products.push({title: title})

    console.log('products', products);
    res.redirect('/');
}

exports.getProductsPage = (req, res, next) => {
    res.render('shop', {
        products: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
}