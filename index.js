const bodyParser = require("body-parser");
const path = require("path");
const express = require("express");
const app = express();
const dbconnect = require("./database/dbconnect");

// Your MongoDB connection URI
const mongoURI = "mongodb://127.0.0.1:27017/blog";

dbconnect(mongoURI);

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Set the view engine and views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

const blog = require("./schema/blog");

const login = require("./routes/login");
const home = require("./routes/home");
const signup = require("./routes/signup");

app.use("/", home);
app.use("/login", login);
app.use("/signup", signup);
app.listen(5000, () => console.log("Running at 5000"));
