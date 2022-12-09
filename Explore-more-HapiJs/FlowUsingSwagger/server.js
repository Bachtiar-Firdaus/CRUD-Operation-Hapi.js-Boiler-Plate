const Hapi = require('@hapi/hapi');
const Manifest = require('./config/mainifest');
const Glue = require('@hapi/glue');

/********  server declare ******/
let server = new Hapi.Server();

/*********** local directory ************/
const composeOptions = {
    relativeTo: __dirname+'/src',
};

/******** start server using IIFE ************/ 
(async () => {
    try {  
      server = await Glue.compose(Manifest.get('/'), composeOptions); 
      await server.start();
      console.log(`Server running at: ${server.info.uri}`);
    }
    catch (err) {  
      console.log(err.message)
    }
  })();

  // server,route,controller,services