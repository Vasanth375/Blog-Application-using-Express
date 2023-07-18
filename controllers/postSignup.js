const userSignupSchema = require("../schema/user");

const postSignup = async (req, res) => {
  const existUser = await userSignupSchema.findOne({ email: req.body.email });
  if (existUser) {
    return res.end("Email Exist");
  }
  const data = userSignupSchema({
    name: req.body.username,
    password: req.body.password,
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
};

module.exports = postSignup;
