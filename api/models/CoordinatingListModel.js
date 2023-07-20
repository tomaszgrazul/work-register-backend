const mongoose = require('mongoose');

const Coordinating = new mongoose.Schema({
    coordinatingName: String,
    coordinatingCompany: String
}, {
    timestamps: true
})
 
module.exports = mongoose.model('Coordinating', Coordinating)