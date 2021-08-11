const { MongoDBNamespace } = require('mongodb')
const mongoose = require('mongoose')

const revert = new mongoose.Schema({
    firstname: {type:String, require: true},
    lastname: {type:String, require: true},
    email: { type: String , required: true},
    gender: { type: String, required: true ,enum:['male','female','other']},
    age: { type: Number, required: true },
})

module.exports = mongoose.model('Rev',revert)
