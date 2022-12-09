const services = require("../services/userServices");
const Joi = require('joi');



// ###################### FOR PERSON #################################

// POST 
exports.peoplepost =  {
    validate: {
                payload: Joi.object({
                    name: Joi.string().required(),
                    age: Joi.number().required(),
                    gender: Joi.string().required(),
                    contact: Joi.number().required(),
                    email: Joi.string().required(),
                }),
                failAction: (request, h, error) => {
                    return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover();
                }
            },
        handler: async (request, h, error) => {
            try {
                var person = request.payload;
                var result = await services.createpeoplepost(person);
                console.log(result)
                if(!result){ return h.response({ message:"user not saved" }).code(400)}
                return h.response(result).code(201);
            } catch (error) {
                return h.response(error).code(500);
            }
        }
    
}


// GET 
exports.peopleget = {
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
            const data = await services.getpeopleget(id);
            if(!data){ return h.response({ message:"error to get the data" }).code(400)}
            return h.response(data).code(200);
            } catch (error) {
            return h.response(error).code(500);
        }
    }
}


//GET ALL
exports.peopleall = {
    validate: {
        failAction: (request, h, error) => {
            return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover();
        }
    },
    handler : async(req , h)=>{
        try {
            const data = await services.getpeopleall();
            if(!data){ return h.response({ message:"error to get the data" }).code(400)}
            return h.response(data).code(200);
            } catch (error) {
            return h.response(error).code(500);
        }
    }
}


//DELETE
exports.peopledelete ={
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
            const data = await services.deletepeople(id);
            if(!data.user){ return h.response({ message:"error to update the data" }).code(400)}
            return h.response(data).code(200);
        }catch (error) {
            return error.message
        }
    }
}


// PUT
exports.peopleupdate = {
    validate: {
        payload: Joi.object({
            id: Joi.string().required(),
            name: Joi.string().required(),
            age: Joi.number().required(),
            gender: Joi.string().required(),
            contact: Joi.number().required(),
            email: Joi.string().required(),
        }),
        failAction: (request, h, error) => {
            return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover();
        }
    },
    handler : async(req, h) => {
        try{
            const user = req.payload;
            const data = await services.updatepeople(user);
            if(!data){ return h.response({ message:"error to update the data" }).code(400)}
            return h.response(data).code(200);
        } catch (error) {
            return h.response(error).code(500)
        }
    },
}




// ###################### FOR STORIES #################################

//POST 
exports.storiespost =  {
    validate: {
                payload: Joi.object({
                    author: Joi.string().required(),
                    title: Joi.string().required(),
                    fans: Joi.string().required()
                }),
                failAction: (request, h, error) => {
                    return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover();
                }
            },
        handler: async (request, h, error) => {
            try {
                var person = request.payload;
                var result = await services.createstoriespost(person);
                console.log(person)
                if(!result){ return h.response({ message:"user not saved" }).code(400)}
                return h.response(result).code(201);
                // return h.response(result);
            } catch (error) {
                return h.response(error).code(500);
            }
        }
    
}


// GET 
exports.storiesget = {
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
            const data = await services.getstoriesget(id);
            if(!data){ return h.response({ message:"error to get the data" }).code(400)}
            return h.response(data).code(200);
            } catch (error) {
            return h.response(error).code(500);
        }
    }
}


//GET ALL
exports.storiesall = {
    validate: {
        failAction: (request, h, error) => {
            return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover();
        }
    },
    handler : async(req , h)=>{
        try {
            const data = await services.getstoriesall();
            if(!data){ return h.response({ message:"error to get the data" }).code(400)}
            return h.response(data).code(200);
            } catch (error) {
            return h.response(error).code(500);
        }
    }
}


//DELETE
exports.storiesdelete ={
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
            const data = await services.deletestories(id);
            if(!data.user){ return h.response({ message:"error to update the data" }).code(400)}
            return h.response(data).code(200);
        }catch (error) {
            return error.message
        }
    }
}


// PUT
exports.storiesupdate = {
    validate: {
        payload: Joi.object({
            id: Joi.string().required(),
            author: Joi.string().required(),
            title: Joi.string().required(),
            fans: Joi.string().required()
        }),
        failAction: (request, h, error) => {
            return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover();
        }
    },
    handler : async(req, h) => {
        try{
            const user = req.payload;
            const data = await services.updatestories(user);
            if(!data){ return h.response({ message:"error to update the data" }).code(400)}
            return h.response(data).code(200);
        } catch (error) {
            return h.response(error).code(500)
        }
    },
}




// ###################### FOR REVS #################################

//POST 
exports.revspost =  {
    validate: {
                payload: Joi.object({
                    person: Joi.string().required(),
                    stories: Joi.string().required()
                }),
                failAction: (request, h, error) => {
                    return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover();
                }
            },
        handler: async (request, h, error) => {
            try {
                var person = request.payload;
                var result = await services.createrevspost(person);
                console.log(result)
                if(!result){ return h.response({ message:"user not saved" }).code(400)}
                return h.response(result).code(201);
            } catch (error) {
                return h.response(error).code(500);
            }
        }
    
}


//GET 
exports.revsget = {
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
            const data = await services.getrevsget(id);
            if(!data){ return h.response({ message:"error to get the data" }).code(400)}
            return h.response(data).code(200);
            } catch (error) {
            return h.response(error).code(500);
        }
    }
}


//GET ALL
exports.revsall = {
    validate: {
        failAction: (request, h, error) => {
            return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover();
        }
    },
    handler : async(req , h)=>{
        try {
            const data = await services.getrevsall();
            if(!data){ return h.response({ message:"error to get the data" }).code(400)}
            return h.response(data).code(200);
            } catch (error) {
            return h.response(error).code(500);
        }
    }
}


//DELETE
exports.revdelete ={
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
            const data = await services.deleterev(id);
            if(!data.user){ return h.response({ message:"error to update the data" }).code(400)}
            return h.response(data).code(200);
        }catch (error) {
            return error.message
        }
    }
}


// PUT
exports.revupdate = {
    validate: {
        payload: Joi.object({
            id: Joi.string().required(),
            person: Joi.string().required(),
            stories: Joi.string().required()
        }),
        failAction: (request, h, error) => {
            return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover();
        }
    },
    handler : async(req, h) => {
        try{
            const user = req.payload;
            const data = await services.updaterev(user);
            if(!data){ return h.response({ message:"error to update the data" }).code(400)}
            return h.response(data).code(200);
        } catch (error) {
            return h.response(error).code(500)
        }
    },
}