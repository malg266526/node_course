const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('Main');
    res.sendFile(path.join(__dirname, '../', 'views', 'main.html'));
})

module.exports = router;