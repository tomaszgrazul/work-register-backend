const mongoose = require('mongoose');

const WorkOrder = new mongoose.Schema({
    whoWork: String,
    numberOfAgreement: String,
    numberOutCompany: String,
    companyName: String,
    officeName: String,
    principalName: String,
    coordinatingName: String,
    coordinatorName: String,
    managerName: String,
    supervisorName: String,
    allowerName: String,
    startDate: String,
    stopDate: String,
    numberRegistration: String,
    teamMember: Array
}, {
    timestamps: true
})
 
module.exports = mongoose.model('WorkOrder', WorkOrder)