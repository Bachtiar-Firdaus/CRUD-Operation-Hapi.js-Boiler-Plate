const Student = require("../models/model1");
const Marks = require("../models/model2");
const Info = require("../models/model");
const Attendance = require("../models/model3")



// ###################### FOR PEOPLE #################################

//POST 
exports.createstudentpost = async (data) => {
    const result = {
        student_name: data.student_name
    };
    return Student.create(result).then((data) => {
        return data;
    }).catch((err) => {
    return { err: err.message };
    });
}


// //GET 
// exports.getpeopleget = async (id) => {
//     return await Person.findById({_id : id}).then((data)=>{
//         return { message: "Record You Want" ,user: data };
//     }).catch((error) => {
//         return (error);
//     });
// }


// //GET ALL
// exports.getpeopleall = async () => {
//     return await Person.find({}).then((data) =>{
//         return data;
//     }).catch((error) => {
//         return (error);
//     });
// }


// //DELETE
// exports.deletepeople = async (id) => {
//     // console.log(id);
//     return await Person.findByIdAndDelete({_id : id}).then((data) => {
//         return { message: "successfully deleted" ,user: data };
//     }).catch ((error) => {
//         return error;
//     });
// }


// //PUT
// exports.updatepeople = async (user) => {
//     const id = user.id
//     return await Person.findByIdAndUpdate({_id : id}, user , {new : true }).then((data) =>{
//         return { message: "successfully update the detail" ,user: data };
//     }).catch ((error) => {
//     return error
//     });
// }



//POST 2
exports.createattendancepost = async (data) => {
    const result = {
        student_name: data.student_name,
        attendance: data.attendance
    };
    return Attendance.create(result).then((data) => {
        return data;
    }).catch((err) => {
    return { err: err.message };
    });
}


//GET ALL
exports.getattendanceall = async () => {
    return await Attendance.find({ attendance: { $gte: 80 } }).then((data) =>{
        return data;
    }).catch((error) => {
        return (error);
    });
}





// // ###################### FOR STORIES #################################

//POST 2
exports.createmarkspost = async (data) => {
    const result = {
        student_name: data.student_name,
        physics: data.physics,
        chemistry: data.chemistry,
        electronic: data.electronic,
        computer: data.computer,
        civil: data.civil
    };
    return Marks.create(result).then((data) => {
        return data;
    }).catch((err) => {
    return { err: err.message };
    });
}


// //GET 
// exports.getstoriesget = async (id) => {
//     return await Story.findById({_id : id}).populate('author').then((data)=>{
//         return { message: "Record You Want" ,user: data };
//     }).catch((error) => {
//         return (error);
//     });
// }


// //GET ALL
// exports.getstoriesall = async () => {
//     return await Story.find({}).then((data) =>{
//         return data;
//     }).catch((error) => {
//         return (error);
//     });
// }


// //DELETE
// exports.deletestories = async (id) => {
//     // console.log(id);
//     return await Story.findByIdAndDelete({_id : id}).then((data) => {
//         return { message: "successfully deleted" ,user: data };
//     }).catch ((error) => {
//         return error;
//     });
// }


// //PUT
// exports.updatestories = async (user) => {
//     const id = user.id
//     return await Story.findByIdAndUpdate({_id : id}, user , {new : true }).then((data) =>{
//         return { message: "successfully update the detail" ,user: data };
//     }).catch ((error) => {
//     return error
//     });
// }




// // ###################### FOR REVS #################################

//POST 
exports.createinfopost = async (data) => {
    const result = {
        student_name: data.student_name,
        marks: data.marks,
        attendance: data.attendance,
    };
    return Info.create(result).then((data) => {
        return data;
    }).catch((err) => {
    return { err: err.message };
    });
}


//GET 
exports.getinfoget = async (id) => {
    return await Info.findById({_id : id}).populate({ path: 'student_name', select: 'student_name' }).populate({ path: 'marks', select: ['physics', 'chemistry', 'electronic', 'computer', 'civil'] }).populate({ path: 'attendance', select: 'attendance' }).then((data)=>{
        return { message: "Record You Want" ,user: data }; //{_id:0} , ['_id']
    }).catch((error) => {
        return (error);
    });
}


//GET ALL
exports.getinfoall = async () => {
    return await Info.find({}).then((data) =>{
        return data;
    }).catch((error) => {
        return (error);
    });
}


// //DELETE
// exports.deleterev = async (id) => {
//     // console.log(id);
//     return await Rev.findByIdAndDelete({_id : id}).then((data) => {
//         return { message: "successfully deleted" ,user: data };
//     }).catch ((error) => {
//         return error;
//     });
// }


// //PUT
// exports.updaterev = async (user) => {
//     const id = user.id
//     return await Rev.findByIdAndUpdate({_id : id}, user , {new : true }).then((data) =>{
//         return { message: "successfully update the detail" ,user: data };
//     }).catch ((error) => {
//     return error
//     });
// }