const { MongoDBNamespace } = require('mongodb')
const mongoose = require('mongoose')
const Person = require('./model1')
const Schema = mongoose.Schema;

const storySchema = Schema({
    author: { type: String, ref: 'Person' },
    title: String,
    fans: String
});

module.exports = mongoose.model('Story',storySchema)
