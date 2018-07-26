const mongoose = require('mongoose');
const mongodbErrorHandler = require('mongoose-mongodb-errors');

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const companySchema = new Schema({
    chamber_number: {
        type: String,
        trim: true,
        default: null,
    },
    company_number: {
        type: String,
        trim: true,
        default: null,
    },
    company_sub_number: {
        type: String,
        trim: true,
        default: null,
    },
    register_number: {
        type: String,
        trim: true,
        default: null,
    },
    main_or_branch_office_indicator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HQBranch',
        default: null,
    },
    rsi_main_or_branch_office_indicator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RSI',
        default: null,
    },
    previous_chamber_number: {
        type: String,
        trim: true,
        default: null,
    },
    previous_company_number: {
        type: String,
        trim: true,
        default: null,
    },
    previous_company_sub_number: {
        type: String,
        trim: true,
        default: null,
    },
    rsi_previous_company_numbers: {
        type: String,
        trim: true,
        default: null,
    },
    chamber_number_main_office: {
        type: String,
        trim: true,
        default: null
    },
    company_number_main_office: {
        type: String,
        trim: true,
        default: null,
    },
    company_sub_number_main_office: {
        type: String,
        trim: true,
        default: null,
    },
    rsi_main_office_numbers: {
        type: String,
        trim: true,
        default: null,
    },
    company_name: {
        type: String,
        trim: true,
        default: null,
    },
    rsi_company_name: {
        type: String,
        trim: true,
        default: null,
    },
    street: {
        type: String,
        trim: true,
        default: null,
    },
    rsi_street: {
        type: String,
        trim: true,
        default: null,
    },
    house_number: {
        type: Number,
        default: null,
    },
    rsi_house_number: {
        type: String,
        trim: true,
        default: null,
    },
    house_number_affix: {
        type: String,
        trim: true,
        default: null,
    },
    rsi_house_number_affix: {
        type: String,
        trim: true,
        default: null
    },
    town_or_city: {
        type: String,
        trim: true,
        default: null,
    },
    rsi_town_or_city: {
        type: String,
        trim: true,
        default: null,
    },
    postal_code: {
        type: String,
        trim: true,
        default: null,
    },
    rsi_postal_code: {
        type: String,
        trim: true,
        default: null,
    },
    mailing_address_street: {
        type: String,
        trim: true,
        default: null,
    },
    rsi_mailing_address_street: {
        type: String,
        trim: true,
        default: null,
    },
    mailing_address_house_number: {
        type: Number,
        default: null,
    },
    rsi_mailing_address_house_number: {
        type: String,
        trim: true,
        default: null
    },
    mailing_address_house_number_affix: {
        type: String,
        trim: true,
        default: null,
    },
    rsi_mailing_address_house_number_affix: {
        type: String,
        trim: true,
        default: null,
    },
    mailing_address_town_or_city: {
        type: String,
        trim: true,
        default: null,
    },
    rsi_mailing_address_town_or_city: {
        type: String,
        trim: true,
        default: null,
    },
    mailing_address_postal_code: {
        type: String,
        trim: true,
        default: null,
    },
    rsi_mailing_address_postal_code: {
        type: String,
        trim: true,
        default: null,
    },
    telefoonnumber: {
        type: String,
        trim: true,
        default: null,
    },
    rsi_telefoonnumber: {
        type: String,
        trim: true,
        default: null,
    },
    trade_name: {
        type: String,
        trim: true,
        default: null,
    },
    rsi_trade_name: {
        type: String,
        trim: true,
        default: null,
    },
    contact_person_title: {
        type: String,
        trim: true,
        default: null,
    },
    contact_person_title_2: {
        type: String,
        trim: true,
        default: null,
    },
    contact_person_initials: {
        type: String,
        trim: true,
        default: null,
    },
    contact_person_prefix: {
        type: String,
        trim: true,
        default: null,
    },
    contact_person_last_name: {
        type: String,
        trim: true,
        default: null,
    },
    rsi_contact_person: {
        type: String,
        trim: true,
        default: null,
    },
    sex: {
        type: String,
        trim: true,
        enum: ['M', 'F'],
        default: null,
    },
    rsi_sex: {
        type: String,
        trim: true,
        default: null,
    },
    domain_name: {
        type: String,
        trim: true,
        default: null,
    },
    rsi_domain_name: {
        type: String,
        trim: true,
        default: null,
    }
});

companySchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('Company', companySchema);