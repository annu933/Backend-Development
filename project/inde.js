const express = require('express');
const app = express();
const path = require('path')

// this two line are parser (use to get form)
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// all emages, css, js files
app.use(express.static(path.join(__dirname, 'public')));

// setup ejs as a view engine
app.set("view engine", 'ejs');

app.get("/",function(req,res){
    res.render("home");
});

app.get("/profile/:username/:age",function(req,res){  //This is Dynamic route
    // res.render("profile")
    const user = req.params.username
    res.send(user)
    
});


// app.get("/",function(req,res){
//     res.send("page number-1 ----Main page")
// });

app.listen(3000, function(){
    console.log("Its running.....")
});



