const mongoose = require('mongoose');

const WorkOrder = new mongoose.Schema({
    whoWork: String,
    companyName: String,
    numberOutCompany: String,
    numberOfAgreement: String,
    officeName: String,
    principalName: String,
    coordinatingName: String,
    coordinatorName: String,
    managerName: String,
    supervisorName: String,
    allowerName: String
}, {
    timestamps: true
})
 
module.exports = mongoose.model('WorkOrder', WorkOrder)