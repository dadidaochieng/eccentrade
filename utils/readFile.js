const mongoose = require('mongoose');
const Company  = mongoose.model('Company');
const HQBranch  = mongoose.model('HQBranch');
const RSI  = mongoose.model('RSI');

const fs  = require('fs');

fs.readFileSync('PNOV0213.ASC').toString().split(/\r?\n/).forEach(async function(line){

    const company = {
        chamber_number: line.substring(0,1),
        company_number: line.substring(2,7),
        company_sub_number: line.substring(8,11),
        register_number: line.substring(12, 13),
        main_or_branch_office_indicator: line.substring(13, 14),
        rsi_main_or_branch_office_indicator: line.substring(14, 15),
        previous_chamber_number: line.substring(15, 16),
        previous_company_number: line.substring(17, 22),
        previous_company_sub_number: line.substring(23, 26),
        rsi_previous_company_numbers: line.substring(27, 28),
        chamber_number_main_office: line.substring(28, 29),
        company_number_main_office: line.substring(30, 35),
        company_sub_number_main_office: line.substring(36, 39),
        rsi_main_office_numbers: line.substring(40, 41),
        company_name: line.substring(41, 85),
        rsi_company_name: line.substring(86, 87),
        street: line.substring(87, 111),
        rsi_street: line.substring(112, 113),
        house_number: line.substring(113, 118),
        rsi_house_number: line.substring(119, 120),
        house_number_affix: line.substring(120, 131),
        rsi_house_number_affix: line.substring(132, 133),
        town_or_city: line.substring(133, 157),
        rsi_town_or_city: line.substring(158, 159),
        postal_code: line.substring(159, 164),
        rsi_postal_code: line.substring(165, 166),
        mailing_address_street: line.substring(166, 190),
        rsi_mailing_address_street: line.substring(191, 192),
        mailing_address_house_number: line.substring(192, 197),
        rsi_mailing_address_house_number: line.substring(198, 199),
        mailing_address_house_number_affix: line.substring(199, 210),
        rsi_mailing_address_house_number_affix: line.substring(211, 212),
        mailing_address_town_or_city: line.substring(212, 236),
        rsi_mailing_address_town_or_city: line.substring(237, 238),
        mailing_address_postal_code: line.substring(238, 243),
        rsi_mailing_address_postal_code: line.substring(244, 245),
        telefoonnumber: line.substring(322, 333),
        rsi_telefoonnumber: line.substring(334, 335),
        trade_name: line.substring(426, 557),
        rsi_trade_name: line.substring(558, 559),
        contact_person_title: line.substring(692, 696),
        contact_person_title_2: line.substring(697, 701),
        contact_person_initials: line.substring(702, 720),
        contact_person_prefix: line.substring(721, 728),
        contact_person_last_name: line.substring(729, 823),
        rsi_contact_person: line.substring(824, 825),
        sex: line.substring(881, 882),
        rsi_sex: line.substring(882, 883),
        domain_name: line.substring(904, 950),
        rsi_domain_name: line.substring(951, 952)
    };
    const created = await (new Company(company));
    console.log(created);
    process.exit();
  });