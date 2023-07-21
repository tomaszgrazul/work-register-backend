const mongoose = require('mongoose');

const Supervisor = new mongoose.Schema({
    supervisorName: String,
    supervisorCompany: String
}, {
    timestamps: true
})
 
module.exports = mongoose.model('Supervisor', Supervisor)