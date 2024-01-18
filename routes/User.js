const express = require("express");
const router = express.Router();

const UserController = require("../controller/UserController");

router.get("/", UserController.get);
router.post("/", UserController.create);
router.get("/role", UserController.getRole);
router.delete("/", UserController.delete);
router.put("/", UserController.update);

module.exports = router;
