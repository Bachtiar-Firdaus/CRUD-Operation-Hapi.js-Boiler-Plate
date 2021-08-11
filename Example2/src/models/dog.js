'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogModel = new Schema({
    name: { type: String, required: true, index: { unique: true } },
    breed: { type: String, required: true },
    age: { type: Number, required: true },
    image: { type: String, required: true },
});

// const taker = mongoose.model('Dog', dogModel, 'dogs');
// module.exports = taker;
module.exports = mongoose.model('Dog', dogModel, 'dogs'); // why 'dogs' ?