const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const passport = require('passport')
const { forwardAuthenticated } = require('../config/auth');
require('../config/passport')(passport);

router.use(express.static('public'))

router.get('/login',forwardAuthenticated, (req, res) => {
    res.render('login' )
})

router.get('/register',forwardAuthenticated, (req, res) => {
    res.render('register')
})

router.post('/register', (req, res) => {
  const { fullname, email, password} = req.body;
  let errors = [];

  if (!fullname || !email || !password ) {
    errors.push({ msg: 'Please enter all fields' });
  }

  if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' });
  }

  if (errors.length > 0) {
    res.render('register', {
      errors,
      fullname,
      email,
      password,
    });
  } else {
    User.findOne({ email: email }).then(user => {
      if (user) {
        errors.push({ msg: 'Email already exists' });
        res.render('register', {
          errors,
          fullname,
          email,
          password,
        });
      } else {
        const newUser = new User({
          fullname,
          email,
          password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                req.flash(
                  'success_msg',
                  'You are now registered and can log in'
                );
                res.redirect('/users/login');
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  }
});

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/users/login',
      failureFlash: true
    })
    (req,res,next)
  });


router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/users/login');
  });

module.exports = router