const express = require("express");
const router = express.Router();

const { profile_display } = require("../controllers/profile");
router.get("/", profile_display);

module.exports = router;
