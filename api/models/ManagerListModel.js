const mongoose = require('mongoose');

const Manager = new mongoose.Schema({
    managerName: String,
    managerCompany: String
}, {
    timestamps: true
})
 
module.exports = mongoose.model('Manager', Manager)