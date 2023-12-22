const express = require("express");
const router = express.Router();
const User = require("./User");

router.use("/user", User);

module.exports = router;
