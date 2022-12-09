// Install Hapi Module
const Hapi =require('@hapi/hapi');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hapidb',{ useNewUrlParser: true ,useUnifiedTopology: true }) //useMongoClient, useNewUrlParser, useUnifiedTopology
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.error(err));
// const Inert = require('inert');
// const Vision = require('vision');
const Path = require("path");
// const init = async () => {

// Create Task Model
const Task = mongoose.model('Task', {text:String});


//Creted Object
const server = Hapi.server({
    port: 2345,
    host: 'localhost',
    routes: {
        files: {
            relativeTo: Path.join(__dirname, 'public')
        }
    }
});


// console.log( Path.join(__dirname, 'public/Cap.png'))
//Start Server
server.start((err) => {
    if(err){
        throw err;
    }
});
console.log(`Server started at: ${server.info.uri}`);



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
    handler: (request, h) => {
        return ('<h1>Hello World</h1>');
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
    handler: (request, h) => {
        return ('Hello, '+request.params.name);
    }
});

// Get Task Route
server.route({
    method: 'GET',
    path: '/tasks',
    config: {
        state: {
        parse: false, // parse and store in request.state
        failAction: 'ignore' // may also be 'ignore' or 'log'
        }
    },
    handler: (request, h) => {
        return Task.find((err, tasks) => {
            // return Task.find((err, tasks) => {
            console.log(tasks);
            return h.response({tasks: tasks});
            // return h.response('tasks', {
            //     tasks:tasks
            // })
        });
        return h.view('tasks',{
            tasks:[
                {text:'Task One'},
                {text:'Task Two'},
                {text:'Task Three'}
            ]
        });
    }
});


//POST Task Route
// server.route({
//     method: 'POST',
//     path: '/tasks',
//     config: {
//         state: {
//         parse: false, // parse and store in request.state
//         failAction: 'ignore' // may also be 'ignore' or 'log'
//         }
//     },
//     handler: (request, h) => {
//         let text = request.payload.text;
//         let newTask = new Task({text:text});
//         newTask.save((err, task) => {
//             if(err) return concole.log(err);
//             return h.redirect().location('tasks');
//         });
//         let tasks = Task.find((err, tasks) => {
//             console.log(tasks);
//         //     h.view('tasks', {
//         //         tasks:tasks
//         //     })
//         });
//         return h.view('tasks',{
//             tasks:[
//                 {text:'Task One'},
//                 {text:'Task Two'},
//                 {text:'Task Three'}
//             ]
//         });
//     }
// });


//Static Route
server.register(require('@hapi/inert', (err) => {
    if(err){
        throw err;
    }
}));

//  / about
server.route({
    method: 'GET',
    path:'/about',
    config: {
        state: {
        parse: false, // parse and store in request.state
        failAction: 'ignore' // may also be 'ignore' or 'log'
        }
    },
    handler: (request, h) => {
       return h.file("about.html");
    }
});


// /IMAGE GET IMAGE
server.route({
    method: 'GET',
    path:'/image',
    config: {
        state: {
        parse: false, // parse and store in request.state
        failAction: 'ignore' // may also be 'ignore' or 'log'
        }
    },
    handler: (request, h) => {
      return  h.file( "Cap.png");
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
    path: __dirname + '/views',
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
        return h.view('index',{
            name: 'DC_126_111'
        })
    }
});



// }


process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

// init();