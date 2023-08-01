const bodyParser = require("body-parser");
const path = require("path");
const express = require("express");
const app = express();
const dbconnect = require("./database/dbconnect");
const jwt = require("jsonwebtoken");

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
const dashboard = require("./routes/dashboard");
const posts = require("./routes/posts");
const createpost = require("./routes/createpost");

app.use("/", home);
app.use("/login", login);
app.use("/signup", signup);
app.use("/dashboard", dashboard);
app.use("/dashboard/post", posts);
app.use("/dashboard/createpost", createpost);

app.listen(5000, () => console.log("Running at 5000"));
