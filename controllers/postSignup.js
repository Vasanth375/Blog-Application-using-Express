const bcrypt = require("bcrypt");

const userSignupSchema = require("../schema/user");

const postSignup = async (req, res) => {
  const existUser = await userSignupSchema.findOne({ email: req.body.email });
  if (existUser) {
    return res.end("Email Exist");
  }
  
  try {
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    
    const data = userSignupSchema({
      name: req.body.username,
      password: hashPassword,
      email: req.body.email,
    });
  
    await data
      .save()
      .then(() => {
        res.redirect("/");
      })
      .catch((err) => {
        console.log("Incomplete", err);
      });
  } catch {
    console.log("Something went wrong in bcrypt code in signup");
  }
};

module.exports = postSignup;
