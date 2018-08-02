const mongoose = require('mongoose');
const Company = mongoose.model('Company');

module.exports = () => {
  const createCompany = async (req, res) => {
    const { body } = req;
    const companies = await (new Company(body)).save();
    res.json(companies);
  };

  const listCompanies = async (req, res) => {
    const list  = await Company.find({}, (err, companyList) => {
      if(err) return res.json(err);
      return res.json(list);
    });
  };

  const getCompanyById = async (req, res) => {

  }

  const updateCompanyById = async (req, res) => {

  }

  const deleteCompanyById = async (req, res) => {

  }

  return {
    createCompany,
    listCompanies,
    getCompanyById,
    updateCompanyById,
    deleteCompanyById
  }
};