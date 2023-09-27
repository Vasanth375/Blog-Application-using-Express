const deletepost = require("../controllers/deletePost");

const express = require("express");
const router = express.Router();
router.get("/", deletepost);

module.exports = router;
