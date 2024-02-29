const express = require("express");
const router = express.Router();

const CustomerController = require("../controller/CustomerController");

router.post("/", CustomerController.post);
router.get("/:id", CustomerController.get);

module.exports = router;
