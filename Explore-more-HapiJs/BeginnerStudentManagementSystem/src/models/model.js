const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const information = new mongoose.Schema({
   student_name:{ type: mongoose.Schema.Types.ObjectId, ref:'Student' },
   marks: { type: mongoose.Schema.Types.ObjectId, ref:'Marks' },
   attendance: { type: mongoose.Schema.Types.ObjectId, ref:'Attendance' },

})

module.exports = mongoose.model('Info',information)
