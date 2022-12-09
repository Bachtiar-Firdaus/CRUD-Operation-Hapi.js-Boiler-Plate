const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const revert = new mongoose.Schema({
   person:{ type: mongoose.Schema.Types.ObjectId, ref:'Person' },
   stories: { type: mongoose.Schema.Types.ObjectId, ref:'Story' },
})

module.exports = mongoose.model('Rev',revert)
