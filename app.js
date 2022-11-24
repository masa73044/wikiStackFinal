const express = require("express");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
const db = require("./models");

const app = express(); // creates an express app

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./public"))); //serving up static files (e.g. css files)
app.use(express.urlencoded({ extended: false })); //parsing middleware for form input data
app.use(express.json());
// app.use(require("method-override")("_method"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const layout = require("./views/layout");

app.get("/", (req, res, next) => {
  res.redirect("/wiki");
});

const wikiRouter = require("./routes/wiki");
const userRouter = require("./routes/users");

app.use("/wiki", wikiRouter);
app.use("/users", userRouter);

module.exports = app;
