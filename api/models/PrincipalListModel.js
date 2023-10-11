const mongoose = require('mongoose');

const Principal = new mongoose.Schema({
    principalName: { type: String, require: true, unique: true },
    principalCompany: String
}, {
    timestamps: true
})
 
module.exports = mongoose.model('Principal', Principal)