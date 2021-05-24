const express = require('express');
const router = express.Router();
const { ensureAuthenticated} = require('../config/auth');


// Dashboard
router.get('/', ensureAuthenticated, (req, res) =>{
  res.render('index')
});

module.exports = router;