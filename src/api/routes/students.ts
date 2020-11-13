const studentRouter = require('express').Router();
const studentDb = require('../database');


studentRouter.get('/:class', (req, res) => {
    studentDb.query(`SELECT * FROM Diakok WHERE hanyadikos = ${req.params.class}`, (err, data, fields) => {
        res.send(data);
    })
});



module.exports = studentRouter;
