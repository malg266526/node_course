const bodyParser = require('body-parser');
const express = require('express');
const path = require("node:path");
// const handlebars = require('express-handlebars');

const errorController = require('./controllers/errors');

const db = require('./util/database');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// app.engine('handlebars', handlebars({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout'}));
app.set('view engine', 'ejs');
app.set('views', 'views')

db.execute('SELECT * FROM products')
    .then((result) => {
        console.log("db result", result[0])
    })
    .catch(err => console.log(err));


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// "/" is default
app.use(errorController.get404)

app.listen(3001);

