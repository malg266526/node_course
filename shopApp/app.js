const bodyParser = require('body-parser');
const express = require('express');
const path = require("node:path");

const errorController = require('./controllers/errors');
const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next) => {
    User
        .findByPk(1)
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => console.log(err));
})

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// "/" is default
app.use(errorController.get404)

Product.belongsTo(User, {
    constraints: true,
    onDelete: 'CASCADE',
});
User.hasMany(Product);

sequelize
    //.sync({force: true})
    .sync()
    .then(result => {
        console.log('result 1')

        return User.findByPk(1)
    })
    .then(user => {
        console.log('result 2', user)

        if (!user) {
            return User.create({
                name: 'Malgo',
                email: 'malgo@test.com',
            })
        }
        return Promise.resolve(user);
    })
    .then(result => {
        console.log('User created');
        app.listen(3001);
    })
    .catch(err => {console('err', err)})



