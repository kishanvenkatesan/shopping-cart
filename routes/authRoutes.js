const express = require('express');
const passport = require('passport');
const User = require('../models/User');


const router = express.Router();
const validateRegisterInput = require("../middleware/registerValidate");
    
router.post('/register', (req, res) => {
  const newUser = {
    username: req.body.username,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone,
    orders: []
  };
  const { errors, isValid } = validateRegisterInput(newUser,req.body.password);

  if (!isValid) {
    res.status(400).json(errors);
    // res.alert('error');
    // res.redirect('/');
  }

  else{
  User.register(newUser, req.body.password, () => {
    passport.authenticate('local')(req, res, () => res.redirect('/'));
  });
}
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/'
}), (_req, res) => {
  res.redirect('/');
});

router.get('/logout', (req, res) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

module.exports = router;