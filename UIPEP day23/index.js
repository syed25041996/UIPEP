var express = require('express');
var path = require('path');
var loggers = require('./middleware/logger');
var app = express();
var PORT = 5000;
//Init middleware
// app.use(loggers)
app.use('/api/members/', require('./routes/api/members'));
// app.use(express.static(path.join(__dirname, 'public')))
app.listen(PORT, function () {
    console.log("Server is running on " + PORT);
});
