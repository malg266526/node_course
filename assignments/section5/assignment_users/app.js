const express = require('express');
const bodyParser = require('body-parser');

const mainRoutes = require('./routes/form');
const userRoutes = require('./routes/users');
const path = require("node:path");

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoutes);
app.use(mainRoutes);

app.listen(3000);