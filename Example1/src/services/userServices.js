const User = require("../models/model");

//POST
exports.createUser = async (data) => {
    const result = {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        gender: data.gender,
        age: data.age
    };
    return User.create(result).then((data) => {
        return data;
    }).catch((err) => {
    return { err: err.message };
    });
;}

//GET ALL 
exports.getAllUser = async () => {
        return await User.find({}).then((data) =>{
            return data;
        }).catch((error) => {
            return (error);
        });
}

//GET

exports.getTheUser = async (id) => {
    // console.log(getAllUser)
    return await User.findById({_id : id}).then((data)=>{
        return { message: "Record You Want" ,user: data };
    }).catch((error) => {
        return (error);
    });
}


//DELETE
exports.deleteUser = async (id) => {
    // console.log(id);
    return await User.findByIdAndDelete({_id : id}).then((data) => {
        return { message: "successfully deleted" ,user: data };
    }).catch ((error) => {
        return error;
});
}


//PUT

exports.updateUser = async (user) => {
    const id = user.id
    return await User.findByIdAndUpdate({_id : id}, user , {new : true }).then((data) =>{
        return { message: "successfully update the detail" ,user: data };
    }).catch ((error) => {
    return error
    });
}


