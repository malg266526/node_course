const express = require('express');

const router = express.Router();

const users = [];

router.get('/users', (req, res) => {
    console.log('USERS GET');
    res.render('users', {users: users});
})

router.post('/add-users', (req, res) => {
    console.log('USERS POST');

    const {name} = req.body
    users.push(name)

    res.redirect('/users');
})

module.exports = router;