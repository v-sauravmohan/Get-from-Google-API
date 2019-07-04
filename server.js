const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const port = 8000;

app.use(cors());

require('./APIs')(app, {});
app.listen(port, () => {
    console.log("Active Port - ",port);
});