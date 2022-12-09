const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true},
  password: { type: String , required: true},
  email: { type: String , required: true},
  gender: { type: String, required: true ,enum:['male','femail','other']},
  age: { type: Number, required: true },
  image: { type: String, required: true }
});

const User = mongoose.model('user', userSchema);

module.exports = User;