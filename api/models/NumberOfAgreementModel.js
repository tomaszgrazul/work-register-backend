const mongoose = require('mongoose');

const NumberOfAgreement = new mongoose.Schema({
    number: String
}, {
    timestamps: true
})
 
module.exports = mongoose.model('NumberOfAgreement', NumberOfAgreement)