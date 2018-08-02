const express = require('express');
const mongoose = require('mongoose');
const RSI  = mongoose.model('RSI');
const router = express.Router();

router.get('/', async (req, res) => {
  const list  = await RSI.find();
  return res.json(list);
});

router.post('/', async (req, res) => {
  const { body } = req;
  const rsi = await (new RSI(body)).save();
  res.json(rsi);
});

module.exports = router;
