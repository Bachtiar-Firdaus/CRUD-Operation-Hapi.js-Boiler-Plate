'use strict';

const Hapi = require("@hapi/hapi");
const mongoose = require('mongoose');
const DogController =  require('./src/controllers/dog');
const MongoDBUrl = 'mongodb://localhost:27017/dogapi';

const server = new Hapi.Server({
  port: 1000,
  host: 'localhost'
});

server.route({
  method: 'GET',
  path: '/dogs',
  handler: DogController.list
});

server.route({
  method: 'GET',
  path: '/dogs/{id}',
  handler: DogController.get
});
server.route({
  method: 'POST',
  path: '/dogs',
  handler: DogController.create
});

server.route({
  method: 'PUT',
  path: '/dogs/{id}',
  handler: DogController.update
});

server.route({
  method: 'DELETE',
  path: '/dogs/{id}',
  handler: DogController.remove
});

(async () => {
  try {  
    await server.start();
    // Once started, connect to Mongo through Mongoose
    mongoose.connect(MongoDBUrl, {useNewUrlParser: true, useUnifiedTopology: true }).then(() => { console.log(`Connected to Mongo server`) }, err => { console.log(err) });
    console.log(`Server running at: ${server.info.uri}`);
  }
  catch (err) {  
    console.log(err)
  }
})();
