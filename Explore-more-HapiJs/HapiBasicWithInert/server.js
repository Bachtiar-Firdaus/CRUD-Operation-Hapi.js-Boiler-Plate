'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.Server({
        host: 'localhost',
        port: 1234
        
    });

    // can use array so that do not need to write server.route again and again eg:- server.route([{............write method/path/handler here.........}])
    //handler must return value (something)
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
            return "<marquee width=100% direction=up height=100% scrollamount=20 bgcolor=lightblue > <h1 style=color:Red >Hello World Welcome!!</h1></marquee>"
        }
    });

    // we can not directly call file which is present in differet file location for that inert is used
    

    server.route({
        method: 'GET',
        path: '/user/{name?}', // ? is used because we don't want mandetory name, without name it will work
        config: {
            state: {
              parse: false, // parse and store in request.state
              failAction: 'ignore' // may also be 'ignore' or 'log'
            }
        },
        handler: (request, h) => {
            if(request.params.name){
            return ('Welcome, Hello - '+request.params.name);
            } else{
                return '<h1>Hello Stranger</h1>'
            }
        }
    });


    server.route({
        method: 'GET',
        path: '/users/{name?}', // ? is used because we don't want mandetory name, without name it will work
        // path: '/user',
        config: {
            state: {
              parse: false, // parse and store in request.state
              failAction: 'ignore' // may also be 'ignore' or 'log'
            }
        }, 
        handler: (request, h) => {
            // return ('Welcome, Hello - '+request.params.name); 1st way
            // return `<h1>Hello ${request.params.name}</h1>`;   2nd way
            if(request.query.name){
            return `<h1> Hello ${request.query.name} ${request.query.lastname}</h1>` // if want to pass query parameter(key value pair from url) user?name=Dar&lastname=Chach
            } else{
                return '<h1>Hello Stranger</h1>'
            }

            // return h.redirect('/'); // will redirect to homepage or on which form you want to redirect

            // if(request.params.name){
            //     return `<h1>Hello ${request.params.name}</h1>`; // 2nd way
            // } else {
            //     return '<h1>Hello Stranger</h1>'
            // }
            
        }
    });

    // if wrong url is passed then will show below Note on Screen
    server.route({
        method: 'GET',
        path: '/{any*}',
        config: {
            state: {
              parse: false, // parse and store in request.state
              failAction: 'ignore' // may also be 'ignore' or 'log'
            }
        },
        handler: (request, h) => {
            return "<h1> Oh No !!! You are on Worng Page </h1>"
        }
    });
    

{/* <marquee width=40% direction=up height=30% ><h1>Hello World Welcome!!</h1></marquee> */}{/* <video width=320 height=240 controls> <source src=Ye.mp4 type=video/mp4></video> */}
    await server.start();
    console.log(`Server started on: ${server.info.uri}`);
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
})

init();