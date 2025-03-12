const fs = require('fs');
const path = require('path');

const pathToSave = path.join(path.dirname(process.mainModule.filename), 'data', 'cart.json')

module.exports = class Cart {
    static addProduct(id, productPrice) {

        fs.readFile(pathToSave, (err, fileContent) => {
            let cart = {products: [], totalPrice: 0};

            if (!err) {
                cart = JSON.parse(fileContent)
            }

            const existingProductIndex = cart.products ? cart.products.findIndex((product) => product.id === id) : 0;
            const existingProduct = cart.products ? cart.products[existingProductIndex] : undefined;
            let updatedProduct;

            if (existingProduct) {
                updatedProduct = {...existingProduct, quantity: existingProduct.quantity + 1};

                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;

            } else {
                updatedProduct = {id: id, quantity: 1};
                cart.products = [...cart.products, updatedProduct];
            }

            cart.totalPrice = cart.totalPrice + +productPrice
            fs.writeFile(pathToSave, JSON.stringify(cart), (err) => {
                if (err) {
                    console.log('Error while saving cart', err)
                }
            })
        })

    }
}