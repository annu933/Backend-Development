const express = require("express");
const app = express();

const userModel = require("./model/user");
const postModel = require("./model/post");

const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", function (req, res) {
  res.render("index");
});

// Registered User

app.post("/register", async (req, res) => {
  const { name, username, email, password, age } = req.body;

  let user = await userModel.findOne({ email });

  if (user) return res.status(500).send("User already registered");
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      let userCreated = await userModel.create({
        name,
        username,
        email,
        password: hash,
        age,
      });
      console.log("userCreated", userCreated);

      let token = jwt.sign({ email: email, userid: userCreated._id }, "shhhh");
      res.cookie("token", token);
      res.send("Successfully registered");
    });
  });
});

// Login User

app.get("/login", function (req, res) {
  res.render("login");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  let user = await userModel.findOne({ email });

  if (!user) return res.status(500).send("Something went wrong");
  bcrypt.compare(password, user.password, function (err, result) {
    // result == true
    if (result) {
      let token = jwt.sign({ email: email, userid: user._id }, "shhhh");
      res.cookie("token", token);
      res.status(200).send("You can login");
    } else res.redirect("/login");
  });
});

// logout user

app.get("/logout", async (req, res) => {
  res.cookie("token", "");
  res.redirect("login");
});

// profile

app.get("/profile", isLoggedIn, function (req, res) {
  res.render("login");
  console.log("user-data", res);
});

function isLoggedIn(req, res, next) {
  console.log(req.cookies);
  if (req.cookies.token === "") res.send("You must logged in");
  else {
    const data = jwt.verify(req.cookies.token, "shhhh");
    req.user = data;
  }
  next();
}

app.listen(3002);
