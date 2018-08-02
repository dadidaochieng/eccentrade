const mongoose = require('mongoose');
const HQBranch = mongoose.model('HQBranch');

module.exports = () => {
    
  const createHQBranch = async (req, res) => {
    const { body } = req;
    const branch = await (new HQBranch(body)).save();
    res.json(branch);
  };

  const getHQBranches = async (req, res) => {
    const branches = await HQBranch.find({}, (err, brachLitst) => {
      if (err) return res.json(err);
      return res.json(branches);
    });
  };

  const getHQBranchById = async (req, res) => {

  }

  const updateHQBranchById = async (req, res) => {

  }

  const deleteHQBranchById = async (req, res) => {

  }

  return {
    createHQBranch,
    getHQBranches,
    getHQBranchById,
    updateHQBranchById,
    deleteHQBranchById
  };
};