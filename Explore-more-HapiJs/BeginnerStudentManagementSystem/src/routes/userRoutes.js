 const Check = require("../controllers/test")

exports.plugin = { 
  pkg : require("../../package.json"),
  name : "user Router",
  register : async(server , options)=>{
    server.route(
        [
            // ###################### FOR PEOPLE #################################
            {
              method: "POST",
              path: "/student",
              config: Check.studentpost
            },
            // {
            //   method: "GET",
            //   path: "/people/{id}",
            //   config: Check.peopleget
            // },
            // {
            //   method: "GET",
            //   path: "/peopleall",
            //   config: Check.peopleall
            // },
            // {
            //   method: "DELETE",
            //   path: "/people/{id}",
            //   config: Check.peopledelete
            // },
            // {
            //   method: "PUT",
            //   path: "/people/{id}",
            //   config: Check.peopleupdate
            // },
            // // ###################### FOR STORIES #################################
            {
              method: "POST",
              path: "/marks",
              config: Check.markspost
            },
            // {
            //   method: "GET",
            //   path: "/stories/{id}",
            //   config: Check.storiesget
            // },
            {
              method: "GET",
              path: "/attendanceall",
              config: Check.attendanceall
            },
            // {
            //   method: "DELETE",
            //   path: "/stories/{id}",
            //   config: Check.storiesdelete
            // },
            // {
            //   method: "PUT",
            //   path: "/stories/{id}",
            //   config: Check.storiesupdate
            // },
            // // ###################### FOR REVS #################################
            {
              method: "POST",
              path: "/Attendance",
              config: Check.attendancepost
            },
            {
              method: "POST",
              path: "/info",
              config: Check.infopost
            },
            {
              method: "GET",
              path: "/info/{id}",
              config: Check.infoget
            },
            {
              method: "GET",
              path: "/infoall",
              config: Check.infoall
            },
            // {
            //   method: "DELETE",
            //   path: "/rev/{id}",
            //   config: Check.revdelete
            // },
            // {
            //   method: "PUT",
            //   path: "/rev/{id}",
            //   config: Check.revupdate
            // }
        ]
        )
    }
  };