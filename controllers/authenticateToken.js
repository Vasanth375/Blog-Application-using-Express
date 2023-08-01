const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

function authenticateToken(req, res, next) {
  const tokenFilePath = path.join(__dirname, "../controllers/Token.json");
  if (!fs.existsSync(tokenFilePath)) {
    res.sendStatus(401); // Token file not found, return 401 Unauthorized
  }

  const tokenData = fs.readFileSync(tokenFilePath, "utf-8");
  const token = JSON.parse(tokenData).authorization;
  const bearerToken = token && token.split(" ")[1]; // Get the token part after 'Bearer '
  console.log(bearerToken);
  if (!bearerToken) {
    res.redirect("/");
  }

  jwt.verify(bearerToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.redirect("/");
    }

    req.user = user;
    next();
  });
}

module.exports = authenticateToken;
