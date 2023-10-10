const mongoose = require('mongoose');

const Company = new mongoose.Schema({
    companyName: { type: String, require: true, unique: true }
}, {
    timestamps: true
})
 
module.exports = mongoose.model('Company', Company)