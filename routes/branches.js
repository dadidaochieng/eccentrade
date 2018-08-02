const express = require('express');
const mongoose = require('mongoose');
const HQBranch  = mongoose.model('HQBranch');
const router = express.Router();

router.get('/', async (req, res) => {
  const list  = await HQBranch.find();
  return res.json(list);
});

router.post('/', async (req, res) => {
  const { body } = req;
  const branch = await (new HQBranch(body)).save();
  res.json(branch);
});

module.exports = router;
