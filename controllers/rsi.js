const mongoose = require('mongoose');
const RSI  = mongoose.model('RSI');

module.exports = () => {
  const createRSI = async (req, res) => {
    const { body } = req;
    const rsi = await (new RSI(body)).save();
    res.json(rsi);
  };

  const listRSI = async (req, res) => {
    const list  = await RSI.find();
    return res.json(list);
  };

  const getRSIById = async (req, res) => {

  }

  const updateRSIById = async (req, res) => {

  }

  const deleteRSIById = async (req, res) => {

  }

  return {
    createRSI,
    listRSI,
    getRSIById,
    updateRSIById,
    deleteRSIById
  };
};