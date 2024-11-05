const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

app.use(cookieParser());

// app.get("/", function (req, res) {
//   res.cookie("name", "annu");
//   res.send("done");
// });

// app.get("/read", function (req, res) {
//   console.log(req.cookies);
//   res.send("done");
// });

// bcrypt-----------

// app.get("/", function (req, res) {
//   // bcrypt.genSalt(10, function (err, salt) {
//   //   bcrypt.hash("polololo", salt, function (err, hash) {
//   //     // Store hash in your password DB.
//   //   });
//   // });
//   res.send("working");
//   // Load hash from your password DB.
//   bcrypt.compare(
//     "polololo",
//     "$2b$10$8t/e0fJ29eBnoGS17wn0QuK5YAlzeHlMgwexKqeGZoPRe7AZzDwTm",
//     function (err, result) {
//       // result == true
//       console.log(result);
//     }
//   );
// });

app.get("/", function (req, res) {
  let token = jwt.sign({ email: "anu@test.com" }, "shhh");
  console.log(token);
  res.cookie("token", token);
  res.send(token);
});

app.get("/read", function (req, res) {
  res.send("read");
  console.log(res.cookie);
});

app.listen(3000);
