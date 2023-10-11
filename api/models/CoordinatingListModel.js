const mongoose = require('mongoose');

const Coordinating = new mongoose.Schema({
    coordinatingName: { type: String, require: true, unique: true },
    coordinatingCompany: String
}, {
    timestamps: true
})
 
module.exports = mongoose.model('Coordinating', Coordinating)