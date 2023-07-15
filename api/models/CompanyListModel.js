const mongoose = require('mongoose');

const Company = new mongoose.Schema({
    companyName: String
}, {
    timestamps: true
})
 
module.exports = mongoose.model('Company', Company)