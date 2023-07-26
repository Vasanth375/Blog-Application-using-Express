const bcrypt = require("bcrypt");

const userSignupSchema = require("../schema/user");

const postLogin = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const CheckUser = await userSignupSchema.findOne({ name: username });
  console.log(CheckUser);
  if (!CheckUser) {
    return res.end("User not Exist");
  }
  try {
    if (await bcrypt.compare(req.body.password, CheckUser.password)) {
      res.send("Success");
    }
  } catch {
    console.log("Something went wrong in postlogin");
  }
};

module.exports = postLogin;
