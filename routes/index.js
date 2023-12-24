const express = require("express");
const router = express.Router();
const User = require("./User");
const Company = require("./Company");

router.use("/user", User);
router.use("/company", Company);

module.exports = router;
