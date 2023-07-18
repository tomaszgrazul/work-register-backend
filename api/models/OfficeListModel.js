const mongoose = require('mongoose');

const Office = new mongoose.Schema({
    officeName: String
}, {
    timestamps: true
})
 
module.exports = mongoose.model('Office', Office)