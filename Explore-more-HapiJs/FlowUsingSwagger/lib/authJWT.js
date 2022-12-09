// const User = require("../scr/models/User");


/******** authenticate user by jwt token ************/ 
exports.plugin = {
    register:(server , options )=>{
        server.auth.strategy('token' , 'jwt',{
            key: options.key,
            validate: validate,
            verifyOptions: {
                algorithms: options.algorithm
            }
        });
    },
    name: 'jwt-auth'
};


const validate = async(decoded , request)=>{
    // console.log("decoded auth : ",decoded,"inside the jwtAuth")
    return {
        isValid: true
    }
}
