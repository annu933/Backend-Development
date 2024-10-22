<p>route-"/", show index.ejs</p>

app.get("/", function (req, res) {
  res.render("index");
});

There will be form , which create a user
1. username
2. email
3. image

<p>create a</p>
-folder : models
-file : user.js

<p>create a user-model , where connect you data with database(mongoDB);</p>

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/testapp1");

const userSchema = mongoose.Schema({
  image: String,
  email: String,
  name: String,
});

module.exports = mongoose.model("user", userSchema);

<p>App.js</p>
<p>send a request to create user</p>

app.post("/create", async (req, res) => {
  let { name, email, image } = req.body;
  let createdUser = await userModel.create({
    name,
    email,
    image,
  });
  res.redirect("read");
});

<!-- read -->
<p>route-"/read", show read.ejs</p>

<p>Created data stored inn database, get that data by userMoodel and pass to the read.ejs file to show there</p>

app.get("/read", async (req, res) => {
  let users = await userModel.find();
  res.render("read", { users });
});

<p>get the users in read.ejs file , by using maping function and ejs , show data in cards</p>

