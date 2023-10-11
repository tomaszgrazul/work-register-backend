const mongoose = require('mongoose');

const Allower = new mongoose.Schema({
    allowerName: { type: String, require: true, unique: true },
    allowerCompany: String
}, {
    timestamps: true
})
 
module.exports = mongoose.model('Allower', Allower)