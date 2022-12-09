var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
const url = 'mongodb://localhost/mongoTest'

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect(url ,{useNewUrlParser:true, useUnifiedTopology: true})

var db = mongoose.connection;

app.post("/sign_up",(req,res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var phno = req.body.phno;
    var password = req.body.password;

    var data = {
        "name": name,
        "email": email,
        "phno": phno,
        "password": password,
    }

    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("record Inserted Successfully");
    });
    return res.redirect('signup.html');
})

app.get("/", (req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
}).listen(8000);

console.log("Listening on PORT 8000");