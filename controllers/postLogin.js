require("dotenv").config();
const bcrypt = require("bcrypt");

const userSignupSchema = require("../schema/user");

const jwt = require("jsonwebtoken");

const postLogin = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const CheckUser = await userSignupSchema.findOne({ name: username });
  // console.log(CheckUser);
  if (!CheckUser) {
    res.send("User not Exist");
  }
  try {
    if (await bcrypt.compare(password, CheckUser.password)) {
      const user = { name: username, pass: password };

      const access_token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
      // res.json({ access: access_token });
      res.redirect("dashboard");
    } else {
      res.redirect("#");
    }
  } catch (ex) {
    console.log(ex);
  }
};
// // use this code when you try to fetch the endpoints of specific user like when you access posts of a user
// // https://youtu.be/mbsmsi7l3r4?t=855
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ");

  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;
    next();
  });
  // res.json({ head: authHeader });
}

module.exports = { postLogin, authenticateToken };
