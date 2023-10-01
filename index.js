const bodyParser = require("body-parser");
const path = require("path");
const express = require("express");
const dbconnect = require("./database/dbconnect");
// const jwt = require("jsonwebtoken");
const methodOverride = require("method-override");
const cookieparser = require("cookie-parser");
const session = require("express-session");
const mongosession = require("connect-mongodb-session")(session);
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Your MongoDB connection URI
const mongoURI =
  "mongodb+srv://Vasanth:yfj72syQ672j3xHH@cluster0.jylzdm0.mongodb.net/?retryWrites=true&w=majority";
dbconnect(mongoURI);

app.use(methodOverride("_method"));
app.use(cookieparser());

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Set the view engine and views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));
const store = new mongosession({
  uri: mongoURI,
  collection: "mysession",
});

app.use(
  session({
    key: "keybro",
    secret: "VASANTH###",
    saveUninitialized: false,
    resave: false,
    cookie: {
      //   secure: true,
      //   httpOnly: true,
      expires: 1000 * 60 * 60,
    },
    store: store,
  })
);

const adminAuth = (req, res, next) => {
  if (req.session.adminlogin) {
    next();
  } else {
    res.redirect("/login");
  }
};

const isAuth = (req, res, next) => {
  if (req.session.isAuth) {
    next();
  } else {
    res.redirect("/login");
  }
};

const loginAuth = (req, res, next) => {
  if (!req.session.isAuth) {
    next();
  } else {
    res.redirect("/dashboard");
  }
};

const login = require("./routes/login");
const home = require("./routes/home");
const signup = require("./routes/signup");
const dashboard = require("./routes/dashboard");
const posts = require("./routes/posts");
const createpost = require("./routes/createpost");
const logout = require("./routes/logout");
const postuploaded = require("./routes/postuploaded");
const view_all_posts = require("./routes/view-all-posts");
const view_blog = require("./routes/view-blog");
const updateBlog = require("./routes/userupdate");
const deletepost = require("./routes/deletePost");
const profile = require("./routes/profile");
const admindashboard = require("./routes/admindasboard");
const postview = require("./routes/postview")
app.use("/", home);
app.use("/login", loginAuth, login);
app.use("/logout", logout);

app.use("/signup", loginAuth, signup);

app.use("/dashboard", isAuth, dashboard);
app.use("/dashboard/post", isAuth, view_all_posts);
app.use("/dashboard/createpost", isAuth, posts);
app.use("/dashboard/successUploaded", isAuth, postuploaded);
app.use("/dashboard/view-blog", isAuth, view_blog);
app.use("/dashboard/update-blog", isAuth, updateBlog);
app.use("/dashboard/deletepost", isAuth, deletepost);
app.use("/dashboard/profile", isAuth, profile);

app.use("/admindashboard", adminAuth, admindashboard);

app.use("/postview", postview);
app.listen(5000, () => console.log("Running at 5000"));
