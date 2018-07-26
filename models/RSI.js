const mongoose = require('mongoose');
const mongodbErrorHandler = require('mongoose-mongodb-errors');

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const rsiSchema = new Schema({
    code: {
        type: Number,
        required: "Please supply an RSI code"
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

companySchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('RSI', rsiSchema);