const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const personSchema = Schema({
  name: String,
  age: Number,
  gender: String,
  contact: Number,
  email: String,
});

module.exports = mongoose.model('Person',personSchema)
