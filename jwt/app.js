const express = require("express");
const app = express();
const userModel = require("./model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const cookieParser = require("cookie-parser");
const path = require("path");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extends: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/create", async (req, res) => {
  const { username, email, password, age } = req.body;

  bcrypt.genSalt(10, (err, salt) => {
    console.log("salt", salt);
    bcrypt.hash(password, salt, async (err, hash) => {
      let createUser = await userModel.create({
        username,
        email,
        password: hash,
        age,
      });
      console.log("createUser", createUser);

      let token = jwt.sign({ email }, "shhhhhhhhhhh");
      res.cookie("token", token);
      res.send(createUser);
    });
  });
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.post("/login", async function (req, res) {
  let user = await userModel.findOne({ email: req.body.email });
  console.log("user", user);
  if (!user) return res.send("something went wrong");

  bcrypt.compare(req.body.password, user.password, function (err, result) {
    console.log("result", result);
    if (result) {
      let token = jwt.sign({ email: user.email }, "shhhhhhhhhhh");
      res.cookie("token", token);
      res.send("Yes, you can now login");
    } else {
      res.send("Something went wrong");
    }
  });
});

app.get("/logout", function (req, res) {
  res.cookie("token", "");
  res.redirect("/");
});

app.listen(3001);
