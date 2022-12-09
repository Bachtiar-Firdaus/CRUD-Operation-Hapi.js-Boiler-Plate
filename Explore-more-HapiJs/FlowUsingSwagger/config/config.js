const Confidence = require('confidence');
require('dotenv').config();

let internals ={
    criteria : {
        env : "development"
    }
}

internals.config = {
    mongoose : {
        production :{
            uri : process.env.MONGO_URL
        }
    },
    jwtAuthOptions: {
        key: process.env.JWT_SECRET_KEY,
        algorithm: 'HS256'
    }
}

// console.log(process.env.JWT_SECRET_KEY)
internals.store = new Confidence.Store(internals.config);

exports.get = (key) =>{
    return internals.store.get(key, internals.criteria);
};
