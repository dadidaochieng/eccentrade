const express = require('express');
const index = require('../controllers/index');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.render('index')
  });


module.exports = router;