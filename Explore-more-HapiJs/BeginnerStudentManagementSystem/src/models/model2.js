const { MongoDBNamespace } = require('mongodb')
const mongoose = require('mongoose')
const Student = require('./model1')
const Schema = mongoose.Schema;

const marksSchema = Schema({
    student_name: { type: String, ref: 'Student' },
    physics: Number,
    chemistry: Number,
    electronic: Number,
    computer: Number,
    civil: Number
});

module.exports = mongoose.model('Marks',marksSchema)
