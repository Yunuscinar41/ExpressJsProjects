const express = require("express");

const app = express();

app.get("/", function (request, response) {
  response.send("<h1>What's up bitch!</h1>");
});

app.get("/contact", function (req, res) {
  res.send("<h1>Contact me at www.yunuscinar4141gmail.com</h1>");
});

app.get("/about", function (req, res) {
  res.send("<h1>Yunus Emre Çınar</h1><p>Age: 21</p>");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
