const fs = require('fs');
const path = require('path');

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
        getProductsFromFile((products) => {
            if (this.id) {
                const updatedProducts = products.map((product) => {
                    return product.id === this.id ? this : product;
                })

                fs.writeFile(pathToSave, JSON.stringify(updatedProducts), (err) => {
                    console.log('Error while saving data to the file', err)
                })
            } else {
                this.id = Math.random().toString();

                products.push(this)

                fs.writeFile(pathToSave, JSON.stringify(products), (err) => {
                    console.log('Error while saving data to the file', err)
                })
            }
        })
    }

    static deleteById(productId) {
        getProductsFromFile((products) => {
            const updatedProducts = products.filter((product) => product.id !== productId);

            fs.writeFile(pathToSave, JSON.stringify(updatedProducts), (err) => {
                console.log('Error while saving data to the file', err)
            })
        })
    }

    static fetchAll(callback) {
        getProductsFromFile(callback)
    }

    static findById(id, callback) {
        getProductsFromFile((products) => {
            const product = products.find((product) => product.id === id);
            callback(product);
        })
    }
}