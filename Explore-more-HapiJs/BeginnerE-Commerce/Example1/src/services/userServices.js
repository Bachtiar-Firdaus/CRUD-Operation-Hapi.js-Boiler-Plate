const Person = require("../models/model1");
const Story = require("../models/model2");
const Rev = require("../models/model");



// ###################### FOR PEOPLE #################################

//POST 
exports.createpeoplepost = async (data) => {
    const result = {
        name: data.name,
        age: data.age,
        gender: data.gender,
        contact: data.contact,
        email: data.email,
    };
    return Person.create(result).then((data) => {
        return data;
    }).catch((err) => {
    return { err: err.message };
    });
}


//GET 
exports.getpeopleget = async (id) => {
    return await Person.findById({_id : id}).then((data)=>{
        return { message: "Record You Want" ,user: data };
    }).catch((error) => {
        return (error);
    });
}


//GET ALL
exports.getpeopleall = async () => {
    return await Person.find({}).then((data) =>{
        return data;
    }).catch((error) => {
        return (error);
    });
}


//DELETE
exports.deletepeople = async (id) => {
    // console.log(id);
    return await Person.findByIdAndDelete({_id : id}).then((data) => {
        return { message: "successfully deleted" ,user: data };
    }).catch ((error) => {
        return error;
    });
}


//PUT
exports.updatepeople = async (user) => {
    const id = user.id
    return await Person.findByIdAndUpdate({_id : id}, user , {new : true }).then((data) =>{
        return { message: "successfully update the detail" ,user: data };
    }).catch ((error) => {
    return error
    });
}




// ###################### FOR STORIES #################################

//POST 2
exports.createstoriespost = async (data) => {
    const result = {
        author: data.author,
        title: data.title,
        fans: data.fans
    };
    return Story.create(result).then((data) => {
        return data;
    }).catch((err) => {
    return { err: err.message };
    });
}


//GET 
exports.getstoriesget = async (id) => {
    return await Story.findById({_id : id}).populate('author').then((data)=>{
        return { message: "Record You Want" ,user: data };
    }).catch((error) => {
        return (error);
    });
}


//GET ALL
exports.getstoriesall = async () => {
    return await Story.find({}).then((data) =>{
        return data;
    }).catch((error) => {
        return (error);
    });
}


//DELETE
exports.deletestories = async (id) => {
    // console.log(id);
    return await Story.findByIdAndDelete({_id : id}).then((data) => {
        return { message: "successfully deleted" ,user: data };
    }).catch ((error) => {
        return error;
    });
}


//PUT
exports.updatestories = async (user) => {
    const id = user.id
    return await Story.findByIdAndUpdate({_id : id}, user , {new : true }).then((data) =>{
        return { message: "successfully update the detail" ,user: data };
    }).catch ((error) => {
    return error
    });
}




// ###################### FOR REVS #################################

//POST 
exports.createrevspost = async (data) => {
    const result = {
        person: data.person,
        stories: data.stories,
    };
    return Rev.create(result).then((data) => {
        return data;
    }).catch((err) => {
    return { err: err.message };
    });
}


//GET 
exports.getrevsget = async (id) => {
    return await Rev.findById({_id : id}).populate('person').populate('stories').then((data)=>{
        return { message: "Record You Want" ,user: data };
    }).catch((error) => {
        return (error);
    });
}


//GET ALL
exports.getrevsall = async () => {
    return await Rev.find({}).then((data) =>{
        return data;
    }).catch((error) => {
        return (error);
    });
}


//DELETE
exports.deleterev = async (id) => {
    // console.log(id);
    return await Rev.findByIdAndDelete({_id : id}).then((data) => {
        return { message: "successfully deleted" ,user: data };
    }).catch ((error) => {
        return error;
    });
}


//PUT
exports.updaterev = async (user) => {
    const id = user.id
    return await Rev.findByIdAndUpdate({_id : id}, user , {new : true }).then((data) =>{
        return { message: "successfully update the detail" ,user: data };
    }).catch ((error) => {
    return error
    });
}