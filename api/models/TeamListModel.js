const mongoose = require('mongoose');

const TeamMember = new mongoose.Schema({
    teamMember: String,
    company: String
}, {
    timestamps: true
})
 
module.exports = mongoose.model('TeamMember', TeamMember)