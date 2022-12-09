 const Check = require("../controllers/test")

exports.plugin = { 
  pkg : require("../../../package.json"),
  name : "user Router",
  register : async(server , options)=>{
    server.route(
        [
            // ###################### FOR PEOPLE #################################
            {
              method: "POST",
              path: "/people",
              config: Check.peoplepost
            },
            {
              method: "GET",
              path: "/people/{id}",
              config: Check.peopleget
            },
            {
              method: "GET",
              path: "/peopleall",
              config: Check.peopleall
            },
            {
              method: "DELETE",
              path: "/people/{id}",
              config: Check.peopledelete
            },
            {
              method: "PUT",
              path: "/people/{id}",
              config: Check.peopleupdate
            },
            // ###################### FOR STORIES #################################
            {
              method: "POST",
              path: "/stories",
              config: Check.storiespost
            },
            {
              method: "GET",
              path: "/stories/{id}",
              config: Check.storiesget
            },
            {
              method: "GET",
              path: "/storiesall",
              config: Check.storiesall
            },
            {
              method: "DELETE",
              path: "/stories/{id}",
              config: Check.storiesdelete
            },
            {
              method: "PUT",
              path: "/stories/{id}",
              config: Check.storiesupdate
            },
            // ###################### FOR REVS #################################
            {
              method: "POST",
              path: "/rev",
              config: Check.revspost
            },
            {
              method: "GET",
              path: "/rev/{id}",
              config: Check.revsget
            },
            {
              method: "GET",
              path: "/revall",
              config: Check.revsall
            },
            {
              method: "DELETE",
              path: "/rev/{id}",
              config: Check.revdelete
            },
            {
              method: "PUT",
              path: "/rev/{id}",
              config: Check.revupdate
            }
        ]
        )
    }
  };