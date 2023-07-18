const user = require("../schema/user");

async function run(myname, myemail, mypassword) {
  const insertUser = await user.create({
    name: myname,
    email: myemail,
    password: mypassword,
  });
  console.log(insertUser);
}

module.exports = run