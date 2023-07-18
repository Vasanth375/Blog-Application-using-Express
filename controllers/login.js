const login = async (req, res) => {
  // const username = req.body.username;
  // const password = req.body.password;
  // const email = req.body.email;
  // console.log("Signup");

  // try {
  //   await insertUser(username, email, password);
  //   console.log("Inserted");
  // } catch (error) {
  //   console.error(error);
  // }

  res.render("login");
};

module.exports = login;
