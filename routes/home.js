const home = require("../controllers/home");

const express = require("express");
const router = express.Router();
const authenticateToken = require("../controllers/authenticateToken");

router.get("/", home);

module.exports = router;
