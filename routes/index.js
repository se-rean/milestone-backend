const express = require("express");
const router = express.Router();
const User = require("./User");
const Company = require("./Company");
const Uploader = require("./uploader");
const Auth = require("./Auth");
const AuthenticateToken = require("../lib/ValidateCredentials");
router.use("/user", AuthenticateToken, User);
router.use("/company", AuthenticateToken, Company);
router.use("/file", AuthenticateToken, Uploader);
router.use("/auth", Auth);
module.exports = router;
