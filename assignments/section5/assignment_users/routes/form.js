const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('FORM GET');

    res.render('form', {pageTitle: 'Form'});
})

module.exports = router;