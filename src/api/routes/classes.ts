const classRouter = require('express').Router();
const classDb = require('../database');


classRouter.get('/', (req, res) => {
    classDb.query("SELECT * FROM Osztalyok", (err, data, fields) => {
        res.send(data);
    })
});



module.exports = classRouter;
