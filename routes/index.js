const express = require("express");
const router = express.Router();
const User = require("./User");
const Company = require("./Company");
const Uploader = require("./uploader");
const Auth = require("./Auth");
const Supplier = require("./Supplier");
const Customer = require("./Customer");
const ThemplateRouter = require("./ThemplateRouter");
const AuthenticateToken = require("../lib/ValidateCredentials");
router.use("/user", AuthenticateToken, User);
router.use("/company", Company);
router.use("/file", Uploader);
router.use("/auth", Auth);
router.use("/supplier", Supplier);
router.use("/themeplate", ThemplateRouter);
router.use("/customer", Customer);

module.exports = router;
