const express = require("express");
const router = express.Router();

const admindashboard = require("../controllers/admindashboard");
router.get("/", admindashboard);

module.exports = router;

