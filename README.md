<h1>Backend Development</h1>


<h6>Creat http Server</h6>

<!--syntax  -->
http.createServer([options][, requestListener])

const http = require('http');
const server = http.createServer(function(req,res){
    res.end("hello world")
});

server.listen(3000);


<h5>Session and Cookies</h5>
We can store data at browser, send to the browser data to backend

<h5>what is session??</h5>
The proccess from Login to Logout .


<h5>what is blob??</h5>
when data actually is in binary formate then convert into unreadable string. 

In this case same for plain text which is comming from frontend convert into un-readable string.

<h5>practice project</h5>
<h2>EJS, Dynamic routing, Initializing project | Part 6 - Backend Development</h2>
1. Initialize project with npm ---> npm init -y

2. Install express --->

3. Setting up parser for form

4. Setting up ejs for ejs pages :  //ejs: It's like html but here can perform calculation, dynamically,
   a. install ejs from npm
   b. setup ejs as a view engine
   c. calculate 2 number : <%= num1+num2 %>

5. Setting up public static files 
   a. create public folder in root directary
   b. inside it create images, stylesheet, javascripts folder
   c. index.js : app.use(express.static(path.join(_dirname, 'public')));

6. dynamic routing: 
   a. dynamic routing
   b. how to get data comming from frontend at backend route
