const mongoose = require('mongoose');

const NumberOfAgreement = new mongoose.Schema({
    numberOfAgreement: String
}, {
    timestamps: true
})
 
module.exports = mongoose.model('NumberOfAgreement', NumberOfAgreement)