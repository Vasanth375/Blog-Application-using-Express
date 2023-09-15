require("dotenv").config();
const bcrypt = require("bcrypt");
const userSignupSchema = require("../schema/user");
// const jwt = require("jsonwebtoken");
// const fs = require("fs"); // Change 'tokenFile' to 'fs'
// const path = require("path");

const postLogin = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const CheckUser = await userSignupSchema.findOne({ name: username });

  if (!CheckUser) {
    return res.send("User not Exist"); // Return the response to avoid double response
  }

  try {
    if (await bcrypt.compare(password, CheckUser.password)) {
      // const user = { name: username, pass: password };
      // const access_token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      //   expiresIn: "1h",
      // });
      // // console.log(access_token);
      // const token = {
      //   authorization: `Bearer ${access_token}`,
      // };

      // const tokenFilePath = path.join(__dirname, "../controllers/Token.json");
      // if (!fs.existsSync(tokenFilePath)) {
      //   // If the file doesn't exist, create an empty object
      //   fs.writeFileSync(tokenFilePath, "{}", "utf-8");
      // }

      // fs.writeFileSync(tokenFilePath, JSON.stringify(token), "utf-8");

      // res.json({ access: access_token });
      req.session.isAuth = true;
      req.session.username = username;
      res.redirect("/dashboard"); // Use absolute path for the redirect
    } else {
      res.redirect("/login"); // Use absolute path for the redirect
    }
  } catch (ex) {
    console.log(ex);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { postLogin };
