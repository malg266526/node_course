const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Nimbor00t',
    database: 'shop-app'
})

module.exports = pool.promise();