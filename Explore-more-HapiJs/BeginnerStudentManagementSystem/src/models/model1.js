const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const studentSchema = Schema({
  student_name: String,
});

module.exports = mongoose.model('Student',studentSchema)
