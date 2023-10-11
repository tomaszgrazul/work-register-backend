const mongoose = require('mongoose');

const Coordinator = new mongoose.Schema({
    coordinatorName: { type: String, require: true, unique: true },
    coordinatorCompany: String
}, {
    timestamps: true
})
 
module.exports = mongoose.model('Coordinator', Coordinator)