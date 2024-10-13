// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World-----------')
// })

// app.listen(3001)

const express = require('express');
const app = express();

// middleware
app.use(function (req, res, next) {
    console.log("This is middleware-1");
    next();
})

// middleware-2
app.use(function (req, res, next) {
    console.log("This is middleware-2");
    next();
})

app.get("/", function (req, res) {
    res.send("Home Page")
})

app.get("/profile", function (req, res) {
    res.send("Profile Page")
})

app.get("/contact", function (req, res) {
    res.send("Contact Page")
})

app.use(function(req,res,err){
    console.log(err.stack);
    res.status(500).send("Throw Error")
})

app.listen(3001);