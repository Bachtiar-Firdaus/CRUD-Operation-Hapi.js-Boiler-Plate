// Install Hapi Module
const Hapi =require('@hapi/hapi');
// const Inert = require('inert');
// const Vision = require('vision');
const Path = require("path");
// const init = async () => {
//Creted Object

const server = Hapi.server({
    port: 8965,
    host: 'localhost',
    routes: {
        files: {
            relativeTo: Path.join(__dirname, 'public')
        }
    }
});



//Start Server
server.start((err) => {
    if(err){
        throw err;
    }
});
console.log(`Server started at: ${server.info.uri}`);


server.route({
    method: 'GET',
    path: '/',
    config: {
        state: {
        parse: false, // parse and store in request.state
        failAction: 'ignore' // may also be 'ignore' or 'log'
        }
    },
    handler: (request, h) => {
        return ('<h1>Hello World</h1>');
        // h.view('index',{
        //     name: 'DC_126_111'
        // });
    }
});

// Vision Template
server.register(require('@hapi/vision', (err) =>{
    if(err){
        throw err;
    }
}));
server.views({
    engines: {
        html: require('handlebars')
    },
    path: __dirname + '/public',
});


server.route({
    method: 'GET',
    path:'/pop',
    config: {
        state: {
        parse: false, // parse and store in request.state
        failAction: 'ignore' // may also be 'ignore' or 'log'
        }
    },
    handler: (request, h) => {
        return h.view('visionn',{
            name: 'DC_126_111'
        })
    }
});



process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

