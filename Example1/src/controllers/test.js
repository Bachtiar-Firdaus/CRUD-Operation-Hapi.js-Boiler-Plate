const services = require("../services/userServices");
const Joi = require('joi');


// Function inside then is (resolve)
// Function inside catch is (reject)



//PUSH
exports.create =  {
    validate: {
                payload: Joi.object({
                    firstname: Joi.string().required(),
                    lastname: Joi.string().required(),
                    email: Joi.string().required(),
                    gender: Joi.string().required(),
                    age: Joi.number().required()
                }),
                failAction: (request, h, error) => {
                    return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover();
                }
            },
        handler: async (request, h, error) => {
            try {
                var person = request.payload;
                var result = await services.createUser(person);
                if(!result){ return h.response({ message:"user not saved" }).code(400)}
                return h.response(result).code(201);
                // return h.response(result);
            } catch (error) {
                return h.response(error).code(500);
            }
        }
    
}


//GET ALL
exports.list = {
    validate: {
        failAction: (request, h, error) => {
            return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover();
        }
    },
    handler : async(req , h)=>{
        try {
            const data = await services.getAllUser();
            if(!data){ return h.response({ message:"error to get the data" }).code(400)}
            return h.response(data).code(200);
            } catch (error) {
            return h.response(error).code(500);
        }
    }
}


//GET
exports.get = {
    validate:{
        params : Joi.object({
          id: Joi.string().required(),
        }),
        failAction: (request, h, error) => {
            return h.response({ message: error.details[0].message.replace(/['"]+/g, '') }).code(400).takeover();
        }
    },
    handler : async(req , h)=>{
        try {
            const id = req.params.id;
            const data = await services.getTheUser(id);
            if(!data){ return h.response({ message:"error to get the data" }).code(400)}
            return h.response(data).code(200);
            } catch (error) {
            return h.response(error).code(500);
        }
    }
}


//DELETE

exports.remove ={
    validate: {
        params : Joi.object({
          id: Joi.string().required(),
        }),
        failAction: (request, h, error) => {
            return h.response({ message: error.details[0].message.replace(/['"]+/g, '') }).code(400).takeover();
        }
    },
handler : async(req, h) => {
    try {
        const id = req.params.id;
        const data = await services.deleteUser(id);
        if(!data.user){ return h.response({ message:"error to update the data" }).code(400)}
        return h.response(data).code(200);
    }catch (error) {
        return error.message
    }
}
}


// PUT
exports.update = {
    validate: {
        payload: Joi.object({
            id: Joi.string().required(),
            firstname: Joi.string().optional(),
            lastname: Joi.string().optional(),
            email: Joi.string().optional(),
            gender: Joi.string().optional(),
            age: Joi.number().optional()
        }),
        failAction: (request, h, error) => {
            return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover();
        }
    },
    handler : async(req, h) => {
        try{
            const user = req.payload;
            const data = await services.updateUser(user);
            if(!data){ return h.response({ message:"error to update the data" }).code(400)}
            return h.response(data).code(200);
        } catch (error) {
            return h.response(error).code(500)
        }
    },
}