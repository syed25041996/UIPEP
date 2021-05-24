const express = require('express')
const path = require('path')
const mongoose = require('mongoose');
const app = express()
const flash = require('connect-flash')
const cookieParser = require('cookie-parser')
const passport = require('passport');
const session = require('express-session');
require('./config/passport')(passport);

mongoose.connect('mongodb://localhost:27017/usersdb', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

//bodyparser
app.use(express.urlencoded({ extended: false }))

//Passport Auth session
app.use(passport.initialize());
app.use(passport.session());

// Express session
app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
    );

//Set up flash messages
app.use(flash());

app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
  });


//Routes
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))

app.listen(4000, () => {
    console.log('Server is running on port 4000')
})