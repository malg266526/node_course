const fs = require('fs');
const path = require('path');
const Cart = require('./cart');

const db = require('../util/database');

const pathToSave = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json')

const getProductsFromFile = (callback) => {
    fs.readFile(pathToSave, (err, fileContent) => {
        if (err) {
            callback([])
        }

        callback(JSON.parse(fileContent))
    })
}

// https://cdn.pixabay.com/photo/2016/03/31/20/51/book-1296045_960_720.png

module.exports = class Product {
    constructor(id, title, imageUrl, description, price) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        return db.execute(
            'INSERT INTO products (title, price, imageUrl, description) VALUES (?, ?, ?, ?) ',
            [this.title, this.price, this.imageUrl, this.description ]
        )
    }

    static deleteById(productId) {
        getProductsFromFile((products) => {
            const updatedProducts = products.filter((product) => product.id !== productId);

            fs.writeFile(pathToSave, JSON.stringify(updatedProducts), (err) => {
                if (err) {
                    console.log('Error while saving data to the file', err)
                }

                if (!err) {
                    const product = products.find((product) => product.id === productId);
                    console.log('deleted product', product)

                    Cart.deleteProduct(productId, +product.price)
                }
            })
        })
    }

    static fetchAll() {
        return db.execute('SELECT * FROM products')
    }

    static findById(id) {
        return db.execute('Select * FROM products WHERE id = ?', [id])
    }
}