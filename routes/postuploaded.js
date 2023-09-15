const express = require("express");
const router = express.Router();

const postuploaded = require("../controllers/postuploaded");

router.get("/", postuploaded);

module.exports = router;
