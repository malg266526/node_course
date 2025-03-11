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


module.exports = class Product {
    constructor(title) {
        this.title = title;
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