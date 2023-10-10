const mongoose = require('mongoose');

const Office = new mongoose.Schema({
    officeName: { type: String, require: true, unique: true }
}, {
    timestamps: true
})
 
module.exports = mongoose.model('Office', Office)