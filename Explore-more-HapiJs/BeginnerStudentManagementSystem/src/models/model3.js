const { MongoDBNamespace } = require('mongodb')
const mongoose = require('mongoose')
const Student = require('./model1')
const Schema = mongoose.Schema;

const attendanceSchema = Schema({
    student_name: { type: String, ref: 'Student' },
    attendance : Number
});

module.exports = mongoose.model('Attendance',attendanceSchema)
