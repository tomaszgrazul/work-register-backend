const mongoose = require('mongoose');

const Coordinator = new mongoose.Schema({
    coordinatorName: String,
    coordinatorCompany: String
}, {
    timestamps: true
})
 
module.exports = mongoose.model('Coordinator', Coordinator)