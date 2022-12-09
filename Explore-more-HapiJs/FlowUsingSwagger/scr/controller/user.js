require('dotenv').config();
const jwt = require("jsonwebtoken");
const services = require("../services/userServices");
const Joi = require('joi');
require('dotenv').config();


/********* create user ************/
exports.createUser= { 
  description: 'create user',
  validate: {
    payload : Joi.object({
      name : Joi.string().min(3).required(),
      password: Joi.string().min(5).required(),
      email: Joi.string().min(5).required(),
      gender: Joi.string().required(),
      age: Joi.number().required(),
      image: Joi.string().optional()
    }),
    failAction: (request, h, error) => {
      return h.response({ message: error.details[0].message.replace(/['"]+/g, '') }).code(400).takeover();
    }
  },
  handler:async( request , h )=>{
    try {
      const userData = request.payload;
      let user = await services.createUser(userData);
      // console.log(user)
      if(!user){ return h.response({ message:"user not saved" }).code(400)}
      return h.response(user).code(201);

    } catch (error) {
      return error.message;
    }
  },
  tags: ['api'] //swagger documentation
};


// /************ get user *****************/
exports.getAllUser = {
  description : "get all the user",
  auth: 'token',
  validate: {
      failAction: (request, h, error) => {
          return h.response({ message: error.details[0].message.replace(/['"]+/g, '') }).code(400).takeover();
      }
    },
  handler : async(req , h)=>{
    try {
          const data = await services.getTheUser();
          if(!data){ return h.response({ message:"error to get the data" }).code(400)}
          return h.response(data).code(200);
    
        } catch (error) {
          return error.message;
        }
  },
  tags: ['api'] //swagger documentation
}

// /***************** update the user *********/
exports.updateUser = {
  description : "update user",
  validate: {
    payload : Joi.object({
      _id: Joi.string().required(),
      name : Joi.string().min(3).optional(),
      password: Joi.string().min(5).optional(),
      email: Joi.string().min(5).required(),
      gender: Joi.string().optional(),
      age: Joi.number().optional(),
      image: Joi.string().optional()
    }),
    failAction: (request, h, error) => {
        return h.response({ message: error.details[0].message.replace(/['"]+/g, '') }).code(400).takeover();
      }
    },
  handler : async(req , h)=>{
    try {
      const user = req.payload;
      const data = await services.updateUser(user);
      if(!data){ return h.response({ message:"error to update the data" }).code(400)}
      return h.response(data).code(200);

    } catch (error) {
      return error.message;
    }
  },
  tags: ['api'] //swagger documentation
}


// /*************** delete the user *****************/
exports.removeUser ={
  description : "delete user",
  validate: {
    payload : Joi.object({
      _id: Joi.string().required(),
    }),
    failAction: (request, h, error) => {
        return h.response({ message: error.details[0].message.replace(/['"]+/g, '') }).code(400).takeover();
      }
    },
  handler :async(req ,h)=>{
  try {
    const id = req.payload._id;
    const data = await services.deleteUser(id);
    if(!data.user){ return h.response({ message:"error to delete user" }).code(400)}
    return h.response(data).code(200);

  } catch (error) {
    return error.message;
  }
},
tags: ['api'] //swagger documentation
}


/******************* user login *****************/
exports.login = {
  description : "login user",
  validate: {
    payload : Joi.object({
      name : Joi.string().min(3).required(),
      password: Joi.string().min(5).required(),
      email: Joi.string().min(5).required(),
    }),
    failAction: (request, h, error) => {
        return h.response({ message: error.details[0].message.replace(/['"]+/g, '') }).code(400).takeover();
      }
    },
  handler :async(req ,h)=>{
  try {
    const user = req.payload;
    const data = await services.loginUser(user);
    const id = data.user._id; 
    // const name = data.user.name;
    // console.log(req.payload)
    let jwtToken = jwt.sign( {id} , `${process.env.JWT_SECRET_KEY}`, { expiresIn: '1 day' });
    if(!data.user){ return h.response({ message:"login failed" }).code(400)}
    // console.log(jwtToken)
    return h.response({ data : data , token: jwtToken }).code(200); // what we want can write inside but have to define first
// let jwtToken = jwt.sign(obj, secret, { expiresIn: '1 day' });
  } catch (error) {
    return error.message;
  }
},
tags: ['api'] //swagger documentation
}
