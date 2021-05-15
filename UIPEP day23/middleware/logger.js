var moment = require('moment');
var logger = function (req, res, next) {
    console.log(req.protocol + "://" + req.get('host') + "/" + req.originalUrl + ": " + moment().format() + " ");
    next();
};
module.exports = logger;
