const express = require("express");
const router = express.Router();

const UserController = require("../controller/UserController");

router.get("/", UserController.get);

module.exports = router;
