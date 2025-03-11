const bodyParser = require('body-parser');
const express = require('express');
// const handlebars = require('express-handlebars');

const errorHandler = require('./controllers/errors');
const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');
const path = require("node:path");

const app = express();

// app.engine('handlebars', handlebars({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout'}));
app.set('view engine', 'ejs');
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// "/" is default
app.use(errorHandler.get404)

app.listen(3001);

