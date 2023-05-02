const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use('/', (req, res, next) => {
    res.send("<h1>welcome</h1>");
})

app.listen(5000);