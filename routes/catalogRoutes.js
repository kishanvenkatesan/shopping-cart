const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

router.get('/', (_req, res) => {
  Product.find({})
    .then((foundProduct) => {
      res.send(foundProduct);
    });
});

module.exports = router;