<h3>SET-UP</h3>

<p>npm init -y</p>
<p>npm i express</p>
<p>npm i ejs</p>
<p>npm i mongoose</p>
<p>npm i bcrypt</p>

<!--boiler-plate code  -->
<h3>boiler-plate code</h3>

const express = require("express)
const app = express()

app.get("/",function(req,res){
    req.send("home-page")
})

app.listen(3000)

<!-- create a user and post model -->
<h3>create a user and post model</h3>

<p>create a model folder</p>
<p>create a user and post.js files</p>

<!-- user.js -->
<h3>user.js</h3>

<p>require mongoose</p>
<p>connect mongoose with mongodb://127.0.0.1:27017/<p>databasename</p>
<p>create a user schema</p>
<p>export user schema </p>

<!-- post.js -->
<h3>post.js</h3>

<p>require mongoose</p>
<p>no need to connect with mongodb, because it's already <p>connected with user model</p>
<p>create post schema</p>
<p>export post schema</p>


<!-- app.js -->
<h3>app.js</h3>

<p>require userModel</p>
<p>require postModel</p>
<p>create a user by default values for now, on "/create" route</p>
<p>create a post by default value , inclued user id of user, on "/post/create" route</p>
<p>find user id and store it in variable (user),push the post id to user's posts array</p>
<p>and save it</p>
<p>res.send({post,user}) on "/post/create"</p>







http://localhost:3002/create
{
  "username": "harsh",
  "email": "harsh@gmail.com",
  "age": 25,
  "posts": [],
  "_id": "672a0ab48a2aef2e317987c1",
  "__v": 0
}


http://localhost:3002/post/create


{
  "post": {
    "postdata": "Hi, How are you?",
    "user": "672a0ab48a2aef2e317987c1",
    "_id": "672a0b754c2921ed5a1cf187",
    "date": "2024-11-05T12:11:33.413Z",
    "__v": 0
  },
  "user": {
    "_id": "672a0ab48a2aef2e317987c1",
    "username": "harsh",
    "email": "harsh@gmail.com",
    "age": 25,
    "posts": [
      "672a0b754c2921ed5a1cf187"
    ],
    "__v": 2
  }
}