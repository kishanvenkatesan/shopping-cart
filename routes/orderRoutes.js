const express = require('express');
const bodyParser = require('body-parser');
const User = require('../models/User');
const requireLogin = require('../middleware/requireLogin');

const router = express.Router();
const jsonParser = bodyParser.json();

router.post('/', requireLogin, jsonParser, (req, res) => {
  User.findById(req.user)
    .then((foundUser) => {
      foundUser.orders = foundUser.orders.concat(req.body.order);
      foundUser.save(() => res.end());
    });
});

module.exports = router;