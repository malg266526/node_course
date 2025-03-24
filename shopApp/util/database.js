const mysql = require('mysql2');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('shop-app', 'root', 'Nimbor00t', {
    dialect: 'mysql',
    host: 'localhost',
});

module.exports = sequelize;

/*const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Nimbor00t',
    database: 'shop-app'
})

module.exports = pool.promise();*/

