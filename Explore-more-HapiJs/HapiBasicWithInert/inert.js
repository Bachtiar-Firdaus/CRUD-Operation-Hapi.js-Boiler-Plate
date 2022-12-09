'use strict';

const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const path = require('path');

const init = async () => {

    const server = Hapi.Server({
        host: 'localhost',
        port: 5555,

        //if we want to access file globally in whole program can use below function for directory
        // routes:{
        //     files:{
        //         relativeTo: path.join(__dirname, 'public')
        //     }
        // }
        
    });

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
            // h('<marquee width=100% direction=up height=100% scrollamount=20 bgcolor=lightblue > <h1 style=color:Red >Hello World Welcome!!</h1></marquee>');
            return "<marquee width=100% direction=up height=100% scrollamount=20 bgcolor=lightblue > <h1 style=color:Red >Hello World Welcome!!</h1></marquee>"
        }
    });


    server.route([{
        method: 'POST',
        path: '/login',
        config: {
            state: {
              parse: false, // parse and store in request.state
              failAction: 'ignore' // may also be 'ignore' or 'log'
            }
        },
        handler: (request, h) => {
            // return h.views('./views/index.html', {username: request.payload.username});
            if (request.payload.username === "Darpan" && request.payload.password === "1234"){
                return h.file('./public/login.html');
            }else {
                return h.redirect('/welcome');
            }
            
            // Normale login with data oon console and on login the return value
            // console.log(request.payload.username);
            // console.log(request.payload.password);
            // return "Done";
        }
    }]);


    // Static Route (have install inert package for the below code)
    await server.register([{
        plugin: require("hapi-geo-locate"),
        options:{
            enabledByDefault: true  
            }            // default is true we will ip address, but if false we will not get ip address
        },

        {
            // plugin: require('@hapi/inert')---- can also use this 
            plugin: Inert
        }
        
        // {
        //     // plugin: require('@hapi/inert')---- can also use this 
        //     plugin: require('@hapi/vision')
        // }
    ]);

    server.route({
        method: 'GET',
        path: '/location',
        config: {
            state: {
              parse: false, // parse and store in request.state
              failAction: 'ignore' // may also be 'ignore' or 'log'
            }
        },
        handler: (request, h) => {
            if(request.location){
                return request.location;
            } else {
                return "<h1> Oh No !!! Your location is not ebabled by Default </h1>"
            }
        }
    });


    server.route([{
        method: 'GET',
        path: '/image',
        config: {
            state: {
              parse: false, // parse and store in request.state
              failAction: 'ignore' // may also be 'ignore' or 'log'
            }
        },
        handler: (request, h) => {
            return h.file('public/Capture.PNG');
        }
    }]);


    // TRY (/welcome and /download) PATH TO UNDERSTAND BETTER FLOW
    // try this have implemented sum of all the URL for onclick function
    server.route([{
        method: 'GET',
        path: '/welcome',
        config: {
            state: {
              parse: false, // parse and store in request.state
              failAction: 'ignore' // may also be 'ignore' or 'log'
            }
        },
        handler: (request, h) => {
            return h.file('./welcome.html');
        }
    }]);

    // Can Download attachment with given filename
    server.route([{
        method: 'GET',
        path: '/download',
        config: {
            state: {
              parse: false, // parse and store in request.state
              failAction: 'ignore' // may also be 'ignore' or 'log'
            }
        },
        handler: (request, h) => {
            return h.file('./welcome.html',{
                //will download attachment directly going on given path
                // mode: 'attachment',
                // will open the file will not download
                mode: 'inline',
                filename: 'welcome-download.html'
            });
        }
    }]);



    server.route([{
        method: 'GET',
        path: '/user',
        config: {
            state: {
              parse: false, // parse and store in request.state
              failAction: 'ignore' // may also be 'ignore' or 'log'
            }
        },
        handler: (request, h) => {
            return h.file('./public/about.html');
        },
        // to give path directly and call the method
        // options:{
        //     files:{
        //         relativeTo: path.join(__dirname, 'public')
        //     }
        // }
    }]);


    // Tasks Route
    // server.route({
    //     method: 'GET',
    //     path: '/tasks',
    //     handler: (request, h) => {
    //         h.view('tasks',{
    //             tasks:[
    //                 {text: 'Task One'},
    //                 {text: 'Task Two'},
    //                 {text: 'Task Three'},
    //             ]
    //         });
    //     }
    // });

    await server.start();
    console.log(`Server started on: ${server.info.uri}`);
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
})

init();
