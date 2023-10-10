const mongoose = require('mongoose');

const NumberOfAgreement = new mongoose.Schema({
    numberOfAgreement: { type: String, require: true, unique: true }
}, {
    timestamps: true
})
 
module.exports = mongoose.model('NumberOfAgreement', NumberOfAgreement)