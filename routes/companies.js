const mongoose = require('mongoose');
const Company  = mongoose.model('Company');
const HQBranch  = mongoose.model('HQBranch');
const RSI  = mongoose.model('RSI');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const list  = await Company.find();
  return res.json(list);
});

router.post('/', async (req, res) => {
  const { body } = req;

  const company = await (new Company(body)).save();
  res.json(company);
});

module.exports = router;
