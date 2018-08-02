const mongoose = require('mongoose');
const mongodbErrorHandler = require('mongoose-mongodb-errors');

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const hqBranchSchema = new Schema({
  code: {
    type: String,
    trim: true,
    enum: ['H', 'N'],
    required: "Please supply the branch code"
  },
  description_nl: {
    type: String,
    trim: true,
    required: "Please supply the (NL) version of the description"
  },
  description_uk: {
    type: String,
    trim: true,
    required: "Please supply the (UK) version of the description"
  }
});

hqBranchSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('HQBranch', hqBranchSchema);