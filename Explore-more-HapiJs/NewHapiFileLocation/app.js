// Install Hapi Module
const Hapi = require('hapi');
// const Inert = require('inert');
// const Vision = require('vision');

// const init = async () => {
//Creted Object
const server = new Hapi.Server();

// COnnection
server.connection({
    port: 9898,
    host:'localhost'
});

//Home Route
server.route({
    method: 'GET',
    path: '/',
    config: {
        state: {
        parse: false, // parse and store in request.state
        failAction: 'ignore' // may also be 'ignore' or 'log'
        }
    },
    handler: (request, reply) => {
        reply('<h1>Hello World</h1>');
        // reply.view('index',{
            // name: 'DC_126_111'
        // });
    }
});

//Dynamic Route
server.route({
    method: 'GET',
    path: '/user/{name}',
    config: {
        state: {
        parse: false, // parse and store in request.state
        failAction: 'ignore' // may also be 'ignore' or 'log'
        }
    },
    handler: (request, reply) => {
        reply('Hello, '+request.params.name);
    }
});

//Static Route
server.register(require('inert'), (err) => {
    if(err){
        throw err;
    }

    server.route({
        method: 'GET',
        path:'/about',
        config: {
            state: {
            parse: false, // parse and store in request.state
            failAction: 'ignore' // may also be 'ignore' or 'log'
            }
        },
        handler: (request, reply) => {
            reply.file('./public/about.html');
        }
    });

    server.route({
        method: 'GET',
        path:'/image',
        config: {
            state: {
            parse: false, // parse and store in request.state
            failAction: 'ignore' // may also be 'ignore' or 'log'
            }
        },
        handler: (request, reply) => {
            reply.file('./public/Cap.png');
            // (.response) to show data written in bracket
            // (.file) to show data from different file location
            // (.redirect) to show data on browser
            // (.view) to see data

        }
    });
});



//Start Server
server.start((err) => {
    if(err){
        throw err;
    }

    console.log(`Server started at: ${server.info.uri}`);
});
// }


process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

// init();