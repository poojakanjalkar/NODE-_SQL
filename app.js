const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.json({ message: "response from server" });
});

app.post("/", (req, res) => {
  //console.log(req);
  console.log(req.params);
  console.log(req.body);
  return res.json({ message: "book created" });
});

app.listen(3000, function () {
  console.log("server started on 3000");
});
