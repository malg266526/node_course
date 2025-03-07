const bodyParser = require('body-parser');
const express = require('express');

const adminData = require('./routes/admin');

const shopRoutes = require('./routes/shop');
const path = require("node:path");

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

// "/" is default
app.use((req, res, next) => {
    res.render('404')
})

app.listen(3001);

