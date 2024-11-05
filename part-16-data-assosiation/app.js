const express = require("express");
const app = express();

const userModel = require("./model/user");
const postModel = require("./model/post");

app.get("/", function (res, req) {
  req.send("data-assosiation");
});

app.get("/create", async (req, res) => {
  let user = await userModel.create({
    username: "harsh",
    email: "harsh@gmail.com",
    age: 25,
  });
  res.send(user);
});

app.get("/post/create", async (req, res) => {
  let post = await postModel.create({
    postdata: "Hi, How are you?",
    user: "672a0ab48a2aef2e317987c1", //giving post id to create post
  });

  let user = await userModel.findOne({ _id: "672a0ab48a2aef2e317987c1" });
  user.posts.push(post._id);
  await user.save();

  res.send({ post, user });
  console.log("user", user);
});

app.listen(3002);
