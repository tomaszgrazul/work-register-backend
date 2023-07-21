const mongoose = require('mongoose');

const Allower = new mongoose.Schema({
    allowerName: String,
    allowerCompany: String
}, {
    timestamps: true
})
 
module.exports = mongoose.model('Allower', Allower)