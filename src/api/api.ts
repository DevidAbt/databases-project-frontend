

const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const logger = require('./middleware/logger')

var app = express();

const PORT = process.env.PORT || 5000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(logger);


app.use('/api/classes', require('./routes/classes'));



app.listen(PORT, () => console.log(`Server started on port ${PORT}`))