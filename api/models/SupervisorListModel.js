const mongoose = require('mongoose');

const Supervisor = new mongoose.Schema({
    supervisorName: { type: String, require: true, unique: true },
    supervisorCompany: String
}, {
    timestamps: true
})
 
module.exports = mongoose.model('Supervisor', Supervisor)