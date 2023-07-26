const login = require("../controllers/login");
const postLogin = require("../controllers/postLogin")

const express = require("express");
const router = express.Router();

router.get("/", login);
router.post("/", postLogin)
module.exports = router;
