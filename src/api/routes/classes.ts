const router = require('express').Router();
const db = require('../database');


router.get('/', (req, res) => {
    db.query("SELECT * FROM `Osztalyok` WHERE 1", (err, data, fields) => {
        res.send(data);
    })
});



module.exports = router;
