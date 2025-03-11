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
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        getProductsFromFile((products) => {
            products.push(this)
            console.log('save', products)

            fs.writeFile(pathToSave, JSON.stringify(products), (err) => {
                console.log('Error while saving data to the file', err)
            })
        })
    }

    static fetchAll(callback) {
        getProductsFromFile(callback)
    }
}