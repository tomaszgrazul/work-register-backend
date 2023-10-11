const mongoose = require('mongoose');

const TeamMember = new mongoose.Schema({
    teamMember: { type: String, require: true, unique: true },
    company: String
}, {
    timestamps: true
})
 
module.exports = mongoose.model('TeamMember', TeamMember)