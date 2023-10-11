const mongoose = require('mongoose');

const Manager = new mongoose.Schema({
    managerName: { type: String, require: true, unique: true },
    managerCompany: String
}, {
    timestamps: true
})
 
module.exports = mongoose.model('Manager', Manager)