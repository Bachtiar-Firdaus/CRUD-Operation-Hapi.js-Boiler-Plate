
const Confidence = require('confidence');

let internals ={
    criteria: {
        env:  'development'
    }
};


internals.manifest = {
    server : {
        host : 'localhost',
        port : 7410,
        routes: {
            cors: {
                origin: ['*'],
                additionalHeaders: ['headers']
            }
        } 
    },
    register: {
            plugins:[
        {
            plugin : "../src/routes/userRoutes"
        }
    ]}
};

internals.store = new Confidence.Store(internals.manifest);
exports.get = (key) =>{
    console.log("key",key,"internals.criteria :",internals.criteria);
    return internals.store.get(key, internals.criteria);
};