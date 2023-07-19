const mongoose = require('mongoose');

const Principal = new mongoose.Schema({
    principalName: String,
    principalCompany: String
}, {
    timestamps: true
})
 
module.exports = mongoose.model('Principal', Principal)