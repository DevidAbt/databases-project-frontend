const moment = require('moment');

var fs = require('fs');
var date = moment().format('YYYY-DD-MM');
var filename = 'src/api/log/' + date + '.txt';



const logging_middleware = (req, res, next) => {
    var logdata = `${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}\n
                    ${req}`
    fs.appendFile(filename, logdata, (err)=>{
        if (err !== null) {
            console.log('Cannot write to logfile.\n' + err);
        }
    });
    next();
};

module.exports = logging_middleware;
