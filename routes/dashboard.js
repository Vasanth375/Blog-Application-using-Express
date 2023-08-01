const dashboard = require("../controllers/dashboard");

const express = require("express");
const router = express.Router();
const authenticateToken = require("../controllers/authenticateToken");

router.get("/",  dashboard);

module.exports = router;
