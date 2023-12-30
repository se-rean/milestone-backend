const express = require("express");
const router = express.Router();
const User = require("./User");
const Company = require("./Company");
const Uploader = require("./uploader");
router.use("/user", User);
router.use("/company", Company);
router.use("/file", Uploader);

module.exports = router;
