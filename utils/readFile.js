const mongoose = require('mongoose');
const Company  = mongoose.model('Company');
const HQBranch  = mongoose.model('HQBranch');
const RSI  = mongoose.model('RSI');

const fs  = require('fs');

fs.readFileSync('PNOV0213.ASC').toString().split(/\r?\n/).forEach(async function(line){

    const company = {
        chamber_number: line.substring(0,1).trim(),
        company_number: line.substring(2,7).trim(),
        company_sub_number: line.substring(8,11).trim(),
        register_number: line.substring(12, 13).trim(),
        main_or_branch_office_indicator: line.substring(13, 14).trim(),
        rsi_main_or_branch_office_indicator: line.substring(14, 15).trim(),
        previous_chamber_number: line.substring(15, 16).trim(),
        previous_company_number: line.substring(17, 22).trim(),
        previous_company_sub_number: line.substring(23, 26).trim(),
        rsi_previous_company_numbers: line.substring(27, 28).trim(),
        chamber_number_main_office: line.substring(28, 29).trim(),
        company_number_main_office: line.substring(30, 35).trim(),
        company_sub_number_main_office: line.substring(36, 39).trim(),
        rsi_main_office_numbers: line.substring(40, 41).trim(),
        company_name: line.substring(41, 85).trim(),
        rsi_company_name: line.substring(86, 87).trim(),
        street: line.substring(87, 111).trim(),
        rsi_street: line.substring(112, 113).trim(),
        house_number: line.substring(113, 118).trim(),
        rsi_house_number: line.substring(119, 120).trim(),
        house_number_affix: line.substring(120, 131).trim(),
        rsi_house_number_affix: line.substring(132, 133).trim(),
        town_or_city: line.substring(133, 157).trim(),
        rsi_town_or_city: line.substring(158, 159).trim(),
        postal_code: line.substring(159, 164).trim(),
        rsi_postal_code: line.substring(165, 166).trim(),
        mailing_address_street: line.substring(166, 190).trim(),
        rsi_mailing_address_street: line.substring(191, 192).trim(),
        mailing_address_house_number: line.substring(192, 197).trim(),
        rsi_mailing_address_house_number: line.substring(198, 199).trim(),
        mailing_address_house_number_affix: line.substring(199, 210).trim(),
        rsi_mailing_address_house_number_affix: line.substring(211, 212).trim(),
        mailing_address_town_or_city: line.substring(212, 236).trim(),
        rsi_mailing_address_town_or_city: line.substring(237, 238).trim(),
        mailing_address_postal_code: line.substring(238, 243).trim(),
        rsi_mailing_address_postal_code: line.substring(244, 245).trim(),
        telefoonnumber: line.substring(322, 333).trim(),
        rsi_telefoonnumber: line.substring(334, 335).trim(),
        trade_name: line.substring(426, 557).trim(),
        rsi_trade_name: line.substring(558, 559).trim(),
        contact_person_title: line.substring(692, 696).trim(),
        contact_person_title_2: line.substring(697, 701).trim(),
        contact_person_initials: line.substring(702, 720).trim(),
        contact_person_prefix: line.substring(721, 728).trim(),
        contact_person_last_name: line.substring(729, 823).trim(),
        rsi_contact_person: line.substring(824, 825).trim(),
        sex: line.substring(881, 882).trim(),
        rsi_sex: line.substring(882, 883).trim(),
        domain_name: line.substring(904, 950).trim(),
        rsi_domain_name: line.substring(951, 952).trim()
    };
    const created = await (new Company(company));
    console.log(created);
    process.exit();
  });