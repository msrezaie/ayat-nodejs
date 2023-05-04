const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../utility/path');

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'index.html'));
})

router.get('/designs', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'designs.html'));
})

module.exports = router;