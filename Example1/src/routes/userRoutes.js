 const Check = require("../controllers/test")
const Joi = require('joi')

exports.plugin = { 
  pkg : require("../../../package.json"),
  name : "user Router",
  register : async(server , options)=>{
    server.route(
        [
            {
                method: "POST",
                path: "/person",
                config: Check.create
            },
            {
                method: "GET",
                path: "/person",
                config: Check.list
            },
            {
                method: "GET",
                path: "/person/{id}",
                config: Check.get
            },
            {
                method: "DELETE",
                path: "/person/{id}",
                config: Check.remove
            },
            {
                method: "PUT",
                path: "/person/{id}",
                config: Check.update
            }
        ]
        )
    }
  };