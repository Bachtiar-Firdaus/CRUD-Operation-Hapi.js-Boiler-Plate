const Hapi = require("@hapi/hapi");
const mongoose = require("mongoose");
const Manifest = require('./config/mainifest');
const Glue = require('@hapi/glue');
const url = 'mongodb://localhost/StudentManagementSystem'


let server = Hapi.server({});


const composeOptions = {
    relativeTo: __dirname+"/src",
};


(async () => {
    try {
        server = await Glue.compose(Manifest.get('/'), composeOptions); 
        await server.start();
        console.log(`Server running at: ${server.info.uri}`);
      // Once started, connect to Mongo through Mongoose
      mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true }).then(() => { console.log(`Connected to Mongo server`) }, err => { console.log(err) });
     
    }
    catch (err) {  
      console.log(err)
    }
  })();