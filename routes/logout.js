const { logout } = require("../controllers/logout");

const express = require("express");
const router = express.Router();

router.get("/", logout);

module.exports = router;
