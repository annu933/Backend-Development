const express = require('express');
const app = express();
const userModel = require('./usermodel');

app.get("/", function(req,res){
    res.send("Hello!!");
});

// create user
app.get("/create", async(req,res) => {
    const createdUser = await userModel.create({
        name: "annu kashyap",
        email: "annu@gmail.com",
        username: "annukashyap"
    }); 
    res.send(createdUser);
    console.log("hey")
});


// update user
app.get("/update", async(req,res) => {
    // userModel.findOneUpdate(findone, update, {new: true});
    let updatedUser = await userModel.findOneAndUpdate({username: "annu4153"}, {name: "annu123"}, {new: true});
    res.send(updatedUser);
});


// read user
app.get("/read", async(req,res) => {
    // userModel.find();
    let readUser = await userModel.find();
    res.send(readUser);
});


// read user by name
app.get("/read", async(req,res) => {
    // userModel.findOne(findone);
    let readUserByname = await userModel.findOne({username: "annukashyap"});
    res.send(readUserByname);
});

// delete user by name
app.get("/delete", async(req,res) => {
    // userModel.findOneAndDelete(findone);
    let userDelete = await userModel.findOneAndDelete({name: "annu"});
    res.send(userDelete);
});

app.listen(3000);