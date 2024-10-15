const express = require('express');
const app = express();
const path = require('path');

app.use(express.json);
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));

app.get("/",function(req,res){
    res.send("This is APP js file"); 
});

app.listen(3000);