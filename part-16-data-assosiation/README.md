<h5>SET-UP</h5>

npm init -y
npm i express
npm i ejs
npm i mongoose
npm i bcrypt

<!--boiler-plate code  -->
<h5>boiler-plate code</h5>

const express = require("express)
const app = express()

app.get("/",function(req,res){
    req.send("home-page")
})

app.listen(3000)

<!-- create a user and post model -->
<h5>create a user and post model</h5>

create a model folder
create a user and post.js files

<!-- user.js -->
<h5>user.js</h5>

require mongoose
connect mongoose with mongodb://127.0.0.1:27017/databasename
create a user schema
export user schema 

<!-- post.js -->
<h5>post.js</h5>

require mongoose
no need to connect with mongodb, because it's already connected with user model
create post schema
export post schema


<!-- app.js -->
<h5>app.js</h5>

require userModel
require postModel
create a user by default values for now, on "/create" route
create a post by default value , inclued user id of user, on "/post/create" route
find user id and store it in variable (user),push the post id to user's posts array
and save it
res.send({post,user}) on "/post/create"







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