const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 4200;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

require('./APIs')(app, {});
app.listen(port, () => {
    console.log("Active Port - ",port);
});