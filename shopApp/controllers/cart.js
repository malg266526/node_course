exports.getCartPage = (req, res) => {
    res.render('shop/cart', {pageTitle: 'Cart', path: "/cart"})
}

exports.getCheckoutPage = (req, res) => {
    res.render('shop/checkout', {pageTitle: 'Checkout', path: "/checkout"})
}

exports.getOrdersPage = (req, res) => {
    res.render('shop/orders', {pageTitle: 'Orders', path: "/orders"})
}